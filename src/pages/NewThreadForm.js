// src/pages/NewThreadForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import './NewThreadForm.css';

export default function NewThreadForm() {
  const { categoryId } = useParams();
  const nav           = useNavigate();
  const { state }     = useLocation();          // catName passed from list page

  /* ── local state ── */
  const initialName        = state?.catName || '';
  const [catName, setCatName] = useState(initialName);
  const [title,   setTitle]   = useState('');
  const [body,    setBody]    = useState('');
  const [saving,  setSaving]  = useState(false);
  const [error,   setError]   = useState('');

  /* ── fetch category title if it wasn’t routed in ── */
  useEffect(() => {
    if (initialName) return;
    (async () => {
      const snap = await getDoc(doc(db, 'forumCategories', categoryId));
      if (snap.exists()) setCatName(snap.data().title);
    })();
  }, [categoryId, initialName]);

  /* ── simple form validation ── */
  function validate() {
    if (!title.trim() || !body.trim()) {
      setError('Title and body are required.');
      return false;
    }
    if (title.length > 120) {
      setError('Title must be under 120 characters.');
      return false;
    }
    return true;
  }

  /* ── submit handler ── */
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const user = auth.currentUser;
    if (!user) {
      setError('You must be logged in to post.');
      return;
    }

    try {
      setSaving(true);

      /* ① create the thread */
      const ref = await addDoc(collection(db, 'forumThreads'), {
        categoryId,
        title:        title.trim(),
        body:         body.trim(),
        createdBy:    user.displayName || user.email.split('@')[0],
        uid:          user.uid,
        createdAt:    serverTimestamp(),
        commentCount: 0,
        score:        0,            // ← NEW: makes query with orderBy('score') work
        thumbnail:    '',
      });

      /* ② best-effort: increment thread counter on the category */
      try {
        await updateDoc(doc(db, 'forumCategories', categoryId), {
          threadCount: increment(1),
        });
      } catch (err) {
        console.warn('[threadCount] update skipped:', err.code || err.message);
      }

      /* ③ navigate to the new thread */
      nav(`/forums/thread/${ref.id}`);
    } catch (err) {
      console.error(err);
      setError('Failed to save thread. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  /* ── ui ── */
  return (
    <section className="new-thread-page">
      <h1>
        Create Post in <span>{catName || 'Forum'}</span>
      </h1>

      <form onSubmit={handleSubmit} className="thread-form">
        {error && <p className="form-error">{error}</p>}

        <label>
          Title
          <input
            type="text"
            maxLength={120}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </label>

        <label>
          Body
          <textarea
            rows={8}
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Enter body"
            required
          />
        </label>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => nav(-1)}
            disabled={saving}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="submit-btn"
            disabled={saving}
          >
            {saving ? 'Posting…' : 'Submit Post'}
          </button>
        </div>
      </form>
    </section>
  );
}
