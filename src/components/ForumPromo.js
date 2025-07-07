// src/components/ForumPromo.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForumPromo.css';

function ForumPromo() {
  const nav = useNavigate();

  return (
    <section className="forum-promo">
      <h2 className="forum-promo__title">
        Join&nbsp;the&nbsp;Conversation
        <span className="forum-promo__underline" />
      </h2>

      <p className="forum-promo__sub">
        Share ideas, ask questions, and connect with Nigerians worldwide.
      </p>

      {/* Banner that links to /forums */}
      <div
        className="forum-banner-wrapper"
        role="button"
        tabIndex={0}
        onClick={() => nav('/forums')}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && nav('/forums')}
        style={{ cursor: 'pointer' }}
        aria-label="Go to forum categories"
      >
<picture>
  <source srcSet="/images/new-forum-banner.webp" type="image/webp" />
  <img
    src="/images/new-forum-banner.webp"
    alt="Connect With the Forum banner"
    className="forum-banner-img"
    loading="lazy"
    width={768}
    height={512}   // adjust to your exported dimensions
  />
</picture>
      </div>

      <button
        type="button"
        className="forum-promo__cta"
        onClick={() => nav('/forums')}
      >
        Explore Forum
      </button>
    </section>
  );
}

export default ForumPromo;
