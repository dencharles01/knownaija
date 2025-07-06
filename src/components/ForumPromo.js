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

      {/* Replace cards with banner */}
      <div className="forum-banner-wrapper">
        <img
          src="/images/new-forum-banner.png"
          alt="Connect With the Forum"
          className="forum-banner-img"
          onClick={() => nav('/forums')}
          role="button"
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Optional call-to-action */}
      <button
        type="button"
        className="forum-promo__cta"
        aria-label="Explore all forum categories"
        onClick={() => nav('/forums')}
      >
        Explore Forum
      </button>
    </section>
  );
}

export default ForumPromo;
