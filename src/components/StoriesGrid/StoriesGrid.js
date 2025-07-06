// src/components/StoriesGrid/StoriesGrid.js
import React from "react";
import "./StoriesGrid.css"; // keep the stylesheet, but image comes from inline style

const StoriesGrid = ({ stories = [] }) => {
  const fallBackCover =
    "https://images.unsplash.com/photo-1504369684018-c9139a5d8d6f?auto=format&fit=crop&w=420&q=60";

  return (
    <section
      className="stories-section"
      /* background served straight from public/ → never “can’t resolve” */
      style={{ backgroundImage: "url(/african_pattern.png)" }}
    >
      <h2 className="stories-heading">KnowNaija Stories</h2>

      <div className="stories-grid">
        {stories.map((story) => (
          <article key={story.id} className="story-card">
            <div className="cover-wrapper">
              <img
                src={story.coverImage || fallBackCover}
                alt={`${story.title} cover`}
                className="cover-img"
              />
            </div>

            <div className="story-body">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-author">by {story.author}</p>

              <div className="story-tags">
                {story.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="continue-btn"
                onClick={() => {
                  /* wire up navigation later */
                }}
              >
                Continue&nbsp;Reading →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoriesGrid;
