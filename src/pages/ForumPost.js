// src/pages/ForumPost.js

import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  doc, getDoc, collection, addDoc, query, where,
  onSnapshot, serverTimestamp, updateDoc, increment, deleteDoc
} from 'firebase/firestore';
import {
  getDownloadURL, ref, uploadBytesResumable, deleteObject
} from 'firebase/storage';
import { db, auth, storage } from '../firebase';
import { isAdmin } from '../utils/isAdmin';
import { vote } from '../utils/vote';
import ShareButtons from '../components/ShareButtons/ShareButtons';
import './ForumPost.css';

function ForumPost() {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [commentImageFile, setCommentImageFile] = useState(null);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState('');
  const [canModifyThread, setCanModifyThread] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const [showFullPost, setShowFullPost] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});

  const currentUser = auth.currentUser;
  const absoluteURL = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'forumThreads', threadId));
        if (!snap.exists()) return setLoading(false);
        setThread({ id: snap.id, ...snap.data() });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [threadId]);

  useEffect(() => {
    (async () => {
      if (!thread || !auth.currentUser) return;
      const admin = await isAdmin();
      setAdminStatus(admin);
      setCanModifyThread(admin || auth.currentUser.uid === thread.uid);
    })();
  }, [thread]);

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

  const validateImage = (file) => {
    const maxSize = 2 * 1024 * 1024;
    if (!file.type.startsWith('image/')) return 'Only image files are allowed.';
    if (file.size > maxSize) return 'Image must be less than 2MB.';
    return null;
  };

  const uploadCommentImage = async (file) => {
    const filename = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `commentImages/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', null, reject, async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      });
    });
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    if (!currentUser) return setError('Login first.');

    setPosting(true);
    try {
      let imageUrl = '';
      if (commentImageFile) {
        const validationError = validateImage(commentImageFile);
        if (validationError) {
          setError(validationError);
          setPosting(false);
          return;
        }
        imageUrl = await uploadCommentImage(commentImageFile);
      }

      await addDoc(collection(db, 'forumComments'), {
        threadId,
        text: newComment.trim(),
        createdBy: currentUser.displayName || currentUser.email.split('@')[0],
        uid: currentUser.uid,
        createdAt: serverTimestamp(),
        image: imageUrl
      });

      await updateDoc(doc(db, 'forumThreads', threadId), {
        commentCount: increment(1)
      });

      setNewComment('');
      setCommentImageFile(null);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setPosting(false);
    }
  };

  const removeCommentImage = async (commentId, imageUrl) => {
    if (!window.confirm('Remove this image from comment?')) return;
    try {
      const path = decodeURIComponent(new URL(imageUrl).pathname.split('/o/')[1].split('?')[0]);
      await deleteObject(ref(storage, path));
      await updateDoc(doc(db, 'forumComments', commentId), { image: '' });
    } catch (err) {
      console.error('Failed to delete image:', err.message);
    }
  };

  const removeThreadImage = async () => {
    if (!window.confirm('Remove image from this thread?')) return;
    try {
      const path = decodeURIComponent(new URL(thread.thumbnail).pathname.split('/o/')[1].split('?')[0]);
      await deleteObject(ref(storage, path));
      await updateDoc(doc(db, 'forumThreads', threadId), { thumbnail: '' });
      setThread({ ...thread, thumbnail: '' });
    } catch (err) {
      console.error('Failed to remove thread image:', err.message);
    }
  };

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

  const toggleComment = (id) => {
    setExpandedComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const myThreadVote = thread?.voters?.[currentUser?.uid] ?? 0;
  const handleThreadVote = (dir) => vote({ type: 'thread', id: thread.id }, currentUser.uid, dir);
  const handleCommentVote = (id, dir) => vote({ type: 'comment', id }, currentUser.uid, dir);

  if (loading) return <p style={{ padding: '2rem' }}>Loading…</p>;
  if (!thread) return <p style={{ padding: '2rem' }}>Thread not found.</p>;

  return (
    <section className="post-page">
      <article className="post-card">
        <h1 className="post-title">{thread.title}</h1>

        <div className="vote-box">
          <button className={myThreadVote === 1 ? 'voted-up' : ''} onClick={() => handleThreadVote(1)}>▲</button>
          <span>{thread.score ?? 0}</span>
          <button className={myThreadVote === -1 ? 'voted-down' : ''} onClick={() => handleThreadVote(-1)}>▼</button>
        </div>

        <div className="post-meta">
          <small>
            Posted by <strong>@{thread.createdBy}</strong> •{' '}
            {thread.createdAt?.toDate()?.toLocaleString('en-GB')}
          </small>
        </div>

        {canModifyThread && (
          <div className="post-actions">
            <button className="danger" onClick={handleDeleteThread}>Delete</button>
          </div>
        )}

        <p className="post-body">
          {showFullPost || thread.body.length <= 300
            ? thread.body
            : thread.body.slice(0, 300) + '...'}
          {thread.body.length > 300 && (
            <button onClick={() => setShowFullPost(!showFullPost)} className="toggle-btn">
              {showFullPost ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>

        {thread.thumbnail && (
          <div className="thread-image">
            <img src={thread.thumbnail} alt="Thread visual" className="thread-img" />
            {canModifyThread && (
              <button className="remove-image-btn" onClick={removeThreadImage}>
                🖼 Remove Image
              </button>
            )}
          </div>
        )}

        <ShareButtons url={absoluteURL} text={thread.title} />
      </article>

      <h2 className="comments-heading">{comments.length} comments</h2>

      <ul className="comment-list">
        {comments.map(c => {
          const myVote = c.voters?.[currentUser?.uid] ?? 0;
          const canModifyImage = adminStatus || c.uid === currentUser?.uid;
          const commentURL = absoluteURL.replace(/#.*$/, '') + '#comment-' + c.id;

          return (
            <li key={c.id} className="comment-item" id={'comment-' + c.id}>
              <div className="comment-avatar">{c.createdBy[0].toUpperCase()}</div>
              <div className="comment-bubble">
                <header>
                  <span className="comment-user">@{c.createdBy}</span>{' '}
                  <time>{c.createdAt?.toDate()?.toLocaleString('en-GB') || 'Just now'}</time>
                </header>

                <p>
                  {(expandedComments[c.id] || c.text.length <= 250)
                    ? c.text
                    : c.text.slice(0, 250) + '...'}
                  {c.text.length > 250 && (
                    <button className="toggle-btn" onClick={() => toggleComment(c.id)}>
                      {expandedComments[c.id] ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </p>

                {c.image && (
                  <div className="comment-image-wrapper">
                    <img src={c.image} alt="Comment visual" className="comment-img" />
                    {canModifyImage && (
                      <button className="remove-image-btn" onClick={() => removeCommentImage(c.id, c.image)}>
                        🖼 Remove Image
                      </button>
                    )}
                  </div>
                )}

                <div className="comment-votes">
                  <button className={myVote === 1 ? 'voted-up' : ''} onClick={() => handleCommentVote(c.id, 1)}>▲</button>
                  <span>{c.score ?? 0}</span>
                  <button className={myVote === -1 ? 'voted-down' : ''} onClick={() => handleCommentVote(c.id, -1)}>▼</button>
                </div>

                {(adminStatus || c.uid === currentUser?.uid) && (
                  <button className="delete-btn" onClick={() => handleDeleteComment(c.id)}>Delete</button>
                )}

                <ShareButtons url={commentURL} text={c.text.slice(0, 40) + (c.text.length > 40 ? '…' : '')} />
              </div>
            </li>
          );
        })}
        <li ref={bottomRef} />
      </ul>

      <form className="comment-form" onSubmit={postComment}>
        {error && <p className="form-error">{error}</p>}
        <textarea
          rows={4}
          placeholder="Add a comment…"
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setCommentImageFile(e.target.files[0])}
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
