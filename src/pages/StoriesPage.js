// src/pages/StoriesPage.js

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  db,
  collection,
  query,
  where,
  orderBy,
  getDocs
} from "../firebase";
import "./StoriesPage.css";

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholder = "/placeholder_cover.jpg";

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const q = query(
          collection(db, "stories"),
          where("status", "==", "approved"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setStories(results);
      } catch (err) {
        console.error("Error loading stories:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <main className="stories-page">
      <h1>KnowNaija Stories</h1>

      {loading && <p>Loading…</p>}
      {!loading && stories.length === 0 && <p>No stories yet.</p>}

      <div className="grid">
        {stories.map((s) => (
          <Link key={s.id} to={`/story/${s.id}`} className="grid-card">
            <img
              src={s.coverImage || placeholder}
              alt={`${s.title} cover`}
            />
            <div className="info">
              <h3>{s.title}</h3>
              <p className="author">by {s.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
