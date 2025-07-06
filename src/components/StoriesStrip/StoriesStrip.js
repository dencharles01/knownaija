// src/components/StoriesStrip/StoriesStrip.js
import React from "react";
import { Link } from "react-router-dom";
import "./StoriesStrip.css";

export default function StoriesStrip({ stories = [] }) {
  const placeholder = "/placeholder_cover.jpg"; // file in public/

  /* simple skeleton if the parent hasn’t fetched yet */
  if (!stories.length) {
    return (
      <section className="stories-strip">
        <div className="container">
          <h2 className="strip-heading">KnowNaija&nbsp;Stories</h2>
          <p style={{ padding: "1rem 0" }}>Loading stories…</p>
        </div>
      </section>
    );
  }

  return (
    <section className="stories-strip">
      <div className="container">
        <h2 className="strip-heading">KnowNaija&nbsp;Stories</h2>

        <div className="stories-scroller">
          {stories.map((s) => (
            <Link
              key={s.id}
              to={`/story/${s.id}`}
              className="story-thumb"
              title={s.title}
            >
              <img
                src={s.coverImage || placeholder}
                alt={`${s.title} cover`}
                className="cover-img"
              />
              <p className="title">{s.title}</p>
            </Link>
          ))}
        </div>

        <Link to="/stories" className="see-all">
          Browse all Stories →
        </Link>
      </div>
    </section>
  );
}
