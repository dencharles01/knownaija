// src/pages/StoryPage.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./StoryPage.css";

const fallback = "/placeholder_cover.jpg";

export default function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("stories")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setStory(data);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <main className="story-page"><p>Loading…</p></main>;
  if (!story)   return <main className="story-page"><p>Story not found.</p></main>;

  return (
    <main className="story-page">
      <article className="wrapper">
        <img
          className="cover"
          src={story.coverImage || fallback}
          alt={`${story.title} cover`}
        />

        <h1>{story.title}</h1>
        <p className="meta">
          by <strong>{story.author}</strong>
          {story.tags?.length > 0 && (
            <> · {story.tags.join(", ")}</>
          )}
        </p>

        <div className="body">
          {story.body.split("\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <Link to="/stories" className="back-link">← Back to all stories</Link>
      </article>
    </main>
  );
}
