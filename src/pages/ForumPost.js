// src/pages/ForumPost.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  doc, getDoc, collection, addDoc, query, where,
  onSnapshot, serverTimestamp, updateDoc, increment, deleteDoc
} from 'firebase/firestore';
import { db, auth }   from '../firebase';
import { isAdmin }    from '../utils/isAdmin';
import { vote }       from '../utils/vote';
import './ForumPost.css';

function ForumPost() {
  const { threadId }   = useParams();
  const navigate       = useNavigate();
  const bottomRef      = useRef(null);

  const [thread,   setThread]   = useState(null);
  const [comments, setComments] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [newComment, setNewComment] = useState('');
  const [posting,  setPosting]  = useState(false);
  const [error,    setError]    = useState('');
  const [canModifyThread, setCanModifyThread] = useState(false);
  const [adminStatus,     setAdminStatus]     = useState(false);

  const currentUser = auth.currentUser;

  /* ── fetch thread once ── */
useEffect(() => {
  (async () => {
    try {
      console.log('🔍 Fetching thread ID:', threadId);
      const snap = await getDoc(doc(db, 'forumThreads', threadId));
      if (!snap.exists()) {
        console.log('❌ No thread found');
        setLoading(false);
        return;
      }

      const threadData = { id: snap.id, ...snap.data() };
      console.log('📌 Thread data:', threadData);
      setThread(threadData);
    } catch (err) {
      console.error('🔥 Error fetching thread:', err.message);
    } finally {
      setLoading(false);
    }
  })();
}, [threadId]);

  /* ── permissions ── */
  useEffect(() => {
    (async () => {
      if (!thread || !auth.currentUser) return;
      const admin  = await isAdmin();
      setAdminStatus(admin);
      setCanModifyThread(admin || auth.currentUser.uid === thread.uid);
    })();
  }, [thread]);

  /* ── realtime comments ── */
  useEffect(() => {
    const q = query(collection(db, 'forumComments'), where('threadId', '==', threadId));
    const unsub = onSnapshot(q, snap => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      list.sort((a, b) => {
        if (!a.createdAt) return 1;
        if (!b.createdAt) return -1;
        return a.createdAt.toMillis() - b.createdAt.toMillis();
      });
      setComments(list);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => unsub();
  }, [threadId]);

  /* ── CRUD helpers ── */
  const handleDeleteThread = async () => {
    if (!window.confirm('Delete this thread?')) return;
    await deleteDoc(doc(db, 'forumThreads', threadId));
    navigate('/forums');
  };

  const handleDeleteComment = async (id) => {
    if (!window.confirm('Delete this comment?')) return;
    await deleteDoc(doc(db, 'forumComments', id));
    await updateDoc(doc(db, 'forumThreads', threadId), { commentCount: increment(-1) });
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const user = auth.currentUser;
    if (!user) return setError('Login first.');
    setPosting(true);
    try {
      await addDoc(collection(db, 'forumComments'), {
        threadId,
        text: newComment.trim(),
        createdBy: user.displayName || user.email.split('@')[0],
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, 'forumThreads', threadId), {
        commentCount: increment(1)
      });
      setNewComment('');
    } catch (err) {
      setError(err.message);
    } finally { setPosting(false); }
  };

  /* ── vote helpers ── */
  const myThreadVote = thread?.voters?.[currentUser?.uid] ?? 0;
  const handleThreadVote  = (dir) =>
    vote({ type:'thread',  id: thread.id },  currentUser.uid, dir);
  const handleCommentVote = (id, dir) =>
    vote({ type:'comment', id }, currentUser.uid, dir);

  if (loading) return <p style={{ padding:'2rem' }}>Loading…</p>;
  if (!thread)  return <p style={{ padding:'2rem' }}>Thread not found.</p>;

  return (
    <section className="post-page">
      <article className="post-card">
        <h1 className="post-title">{thread.title}</h1>

        {/* vote box */}
        <div className="vote-box">
          <button
            className={myThreadVote === 1 ? 'voted-up' : ''}
            onClick={() => handleThreadVote(1)}
          >▲</button>
          <span>{thread.score ?? 0}</span>
          <button
            className={myThreadVote === -1 ? 'voted-down' : ''}
            onClick={() => handleThreadVote(-1)}
          >▼</button>
        </div>

        <div className="post-meta">
          <small>
            Posted by <strong>@{thread.createdBy}</strong>{' '}
            • {thread.createdAt?.toDate()?.toLocaleString('en-GB')}
          </small>
        </div>

        {canModifyThread && (
          <div className="post-actions">
            <button className="danger" onClick={handleDeleteThread}>Delete</button>
          </div>
        )}

        <p className="post-body">{thread.body}</p>
      </article>

      <h2 className="comments-heading">{comments.length} comments</h2>

      <ul className="comment-list">
        {comments.map(c => {
          const myVote = c.voters?.[currentUser?.uid] ?? 0;
          return (
            <li key={c.id} className="comment-item">
              <div className="comment-avatar">{c.createdBy[0].toUpperCase()}</div>

              <div className="comment-bubble">
                <header>
                  <span className="comment-user">@{c.createdBy}</span>{' '}
                  <time>
                    {c.createdAt?.toDate
                      ? c.createdAt.toDate().toLocaleString('en-GB',{
                          hour:'2-digit', minute:'2-digit', day:'numeric', month:'short'
                        })
                      : 'Just now'}
                  </time>
                </header>

                <p>{c.text}</p>

                <div className="comment-votes">
                  <button
                    className={myVote === 1 ? 'voted-up' : ''}
                    onClick={() => handleCommentVote(c.id, 1)}
                  >▲</button>
                  <span>{c.score ?? 0}</span>
                  <button
                    className={myVote === -1 ? 'voted-down' : ''}
                    onClick={() => handleCommentVote(c.id, -1)}
                  >▼</button>
                </div>

                {(adminStatus || c.uid === currentUser?.uid) && (
                  <button className="delete-btn" onClick={() => handleDeleteComment(c.id)}>
                    Delete
                  </button>
                )}
              </div>
            </li>
          );
        })}
        <li ref={bottomRef} />
      </ul>

      <form onSubmit={postComment} className="comment-form">
        {error && <p className="form-error">{error}</p>}
        <textarea
          rows="4"
          placeholder="Add a comment…"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          required
        />
        <button type="submit" disabled={posting}>
          {posting ? 'Posting…' : 'Post Comment'}
        </button>
      </form>

      <Link to="/forums" className="back-link">← Back to threads</Link>
    </section>
  );
}

export default ForumPost;
