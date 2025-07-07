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
import ShareButtons   from '../components/ShareButtons/ShareButtons';   // ← NEW
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
        const snap = await getDoc(doc(db, 'forumThreads', threadId));
        if (!snap.exists()) { setLoading(false); return; }
        setThread({ id: snap.id, ...snap.data() });
      } catch (err) { console.error(err); } finally { setLoading(false); }
    })();
  }, [threadId]);

  /* ── permissions ── */
  useEffect(() => {
    (async () => {
      if (!thread || !auth.currentUser) return;
      const admin = await isAdmin();
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
      await updateDoc(doc(db, 'forumThreads', threadId), { commentCount: increment(1) });
      setNewComment('');
    } catch (err) { setError(err.message); } finally { setPosting(false); }
  };

  /* ── vote helpers ── */
  const myThreadVote = thread?.voters?.[currentUser?.uid] ?? 0;
  const handleThreadVote  = (dir) => vote({ type:'thread',  id: thread.id },  currentUser.uid, dir);
  const handleCommentVote = (id, dir) => vote({ type:'comment', id }, currentUser.uid, dir);

  /* ── share helpers ── */
  const absoluteURL = typeof window !== 'undefined' ? window.location.href : '';

  /* ── early returns ── */
  if (loading) return React.createElement('p', { style:{ padding:'2rem' } }, 'Loading…');
  if (!thread)  return React.createElement('p', { style:{ padding:'2rem' } }, 'Thread not found.');

  /* ── MAIN RENDER ── */
  return React.createElement(
    'section',
    { className: 'post-page' },
    [
      /* ░░ THREAD CARD ░░ */
      React.createElement(
        'article',
        { key: 'article', className: 'post-card' },
        [
          React.createElement('h1', { key: 'title', className: 'post-title' }, thread.title),

          /* vote box */
          React.createElement(
            'div',
            { key: 'vbox', className: 'vote-box' },
            [
              React.createElement('button', {
                key: 'up',
                className: myThreadVote === 1 ? 'voted-up' : '',
                onClick: () => handleThreadVote(1)
              }, '▲'),
              React.createElement('span', { key: 'score' }, thread.score ?? 0),
              React.createElement('button', {
                key: 'down',
                className: myThreadVote === -1 ? 'voted-down' : '',
                onClick: () => handleThreadVote(-1)
              }, '▼')
            ]
          ),

          /* meta */
          React.createElement(
            'div',
            { key: 'meta', className: 'post-meta' },
            React.createElement(
              'small',
              null,
              [
                'Posted by ',
                React.createElement('strong', { key: 'u' }, '@' + thread.createdBy),
                ' • ',
                thread.createdAt?.toDate()?.toLocaleString('en-GB')
              ]
            )
          ),

          /* delete */
          canModifyThread
            ? React.createElement(
                'div',
                { key: 'actions', className: 'post-actions' },
                React.createElement('button', { className: 'danger', onClick: handleDeleteThread }, 'Delete')
              )
            : null,

          React.createElement('p', { key: 'body', className: 'post-body' }, thread.body),

          /* SHARE BUTTONS for thread */
          React.createElement(ShareButtons, { key: 'share', url: absoluteURL, text: thread.title })
        ]
      ),

      /* ░░ COMMENTS ░░ */
      React.createElement('h2', { key: 'h2', className: 'comments-heading' }, comments.length + ' comments'),

      React.createElement(
        'ul',
        { key: 'clist', className: 'comment-list' },
        [
          ...comments.map(c => {
            const myVote = c.voters?.[currentUser?.uid] ?? 0;
            const commentURL = absoluteURL.replace(/#.*$/, '') + '#comment-' + c.id;

            return React.createElement(
              'li',
              { key: c.id, className: 'comment-item', id: 'comment-' + c.id },
              [
                React.createElement('div', { key: 'av', className: 'comment-avatar' }, c.createdBy[0].toUpperCase()),

                React.createElement(
                  'div',
                  { key: 'bubble', className: 'comment-bubble' },
                  [
                    /* header */
                    React.createElement(
                      'header',
                      { key: 'head' },
                      [
                        React.createElement('span', { key: 'user', className: 'comment-user' }, '@' + c.createdBy),
                        ' ',
                        React.createElement(
                          'time',
                          { key: 'time' },
                          c.createdAt?.toDate
                            ? c.createdAt.toDate().toLocaleString('en-GB', {
                                hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short'
                              })
                            : 'Just now'
                        )
                      ]
                    ),

                    React.createElement('p', { key: 'txt' }, c.text),

                    /* votes */
                    React.createElement(
                      'div',
                      { key: 'cvotes', className: 'comment-votes' },
                      [
                        React.createElement('button', {
                          key: 'up',
                          className: myVote === 1 ? 'voted-up' : '',
                          onClick: () => handleCommentVote(c.id, 1)
                        }, '▲'),
                        React.createElement('span', { key: 'score' }, c.score ?? 0),
                        React.createElement('button', {
                          key: 'down',
                          className: myVote === -1 ? 'voted-down' : '',
                          onClick: () => handleCommentVote(c.id, -1)
                        }, '▼')
                      ]
                    ),

                    /* delete btn (if owner or admin) */
                    (adminStatus || c.uid === currentUser?.uid)
                      ? React.createElement(
                          'button',
                          { key: 'del', className: 'delete-btn', onClick: () => handleDeleteComment(c.id) },
                          'Delete'
                        )
                      : null,

                    /* SHARE BUTTONS for comment */
                    React.createElement(ShareButtons, {
                      key: 'share',
                      url: commentURL,
                      text: c.text.slice(0, 40) + (c.text.length > 40 ? '…' : '')
                    })
                  ]
                )
              ]
            );
          }),

          React.createElement('li', { key: 'bottom', ref: bottomRef })
        ]
      ),

      /* ░░ COMMENT FORM ░░ */
      React.createElement(
        'form',
        { key: 'form', className: 'comment-form', onSubmit: postComment },
        [
          error ? React.createElement('p', { key: 'err', className: 'form-error' }, error) : null,
          React.createElement('textarea', {
            key: 'ta',
            rows: 4,
            placeholder: 'Add a comment…',
            value: newComment,
            onChange: e => setNewComment(e.target.value),
            required: true
          }),
          React.createElement('button', { key: 'btn', type: 'submit', disabled: posting },
            posting ? 'Posting…' : 'Post Comment'
          )
        ]
      ),

      /* back link */
      React.createElement(Link, { key: 'back', to: '/forums', className: 'back-link' }, '← Back to threads')
    ]
  );
}

export default ForumPost;
