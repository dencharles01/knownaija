// src/pages/StoriesPage.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./StoriesPage.css";

export default function StoriesPage() {
  const [stories, setStories]   = useState([]);
  const [loading, setLoading]   = useState(true);

  /* ───────── fetch approved stories ───────── */
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("stories")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (!error) setStories(data);
      setLoading(false);
    })();
  }, []);

  const placeholder = "/placeholder_cover.jpg";

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
