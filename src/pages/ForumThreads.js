// src/pages/ForumThreads.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import './ForumThreads.css';

export default function ForumThreads() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  // 🔁 Get forum title from Firestore
  useEffect(() => {
    const fetchCategoryTitle = async () => {
      try {
        const docRef = doc(db, 'forumCategories', categoryId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data?.title?.trim() || categoryId);
        } else {
          setTitle(categoryId); // fallback to slug
        }
      } catch (err) {
        console.error('Error fetching title:', err);
        setTitle(categoryId); // fallback to slug
      }
    };

    fetchCategoryTitle();
  }, [categoryId]);

  // 🔁 Fetch threads
  useEffect(() => {
    const q = query(
      collection(db, 'forumThreads'),
      where('categoryId', '==', categoryId),
      orderBy('score', 'desc'),
      orderBy('createdAt', 'desc')
    );

    const unsub = onSnapshot(q, snap => {
      setThreads(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });

    return () => unsub();
  }, [categoryId]);

  if (loading) return <p className="loading">Loading…</p>;

  return (
    <main className="thread-list-page">
      <h1 className="page-title">Threads in {title}</h1>

      {threads.length === 0 && <p>No threads yet.</p>}

      <ul className="thread-list">
        {threads.map(t => (
          <li key={t.id} className="thread-card">
            <Link to={`/forums/thread/${t.id}`} className="thread-link">
              <h3 className="thread-title">{t.title}</h3>

              <div className="thread-meta">
                <span className="score">▲ {t.score ?? 0}</span>
                <span className="comments">
                  {t.commentCount ?? 0} comments
                </span>
                <span className="date">
                  {t.createdAt?.toDate()?.toLocaleDateString('en-GB')}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {auth.currentUser && (
        <button
          className="new-thread-btn"
          onClick={() => navigate(`/forums/${categoryId}/new`)}
        >
          Start new thread
        </button>
      )}
    </main>
  );
}
