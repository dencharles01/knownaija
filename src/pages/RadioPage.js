// src/pages/RadioPage.js
import React from "react";
import { useRadio } from "../contexts/RadioContext";
import "../components/radioPlayer.css";

export default function RadioPage() {
  const {
    track,
    pct,
    playing,
    toggle,
    next,
    previous,
    shuffle,        // ← read shuffle state
    toggleShuffle,  // ← flip shuffle on/off
  } = useRadio();

  // wait for playlist to load
  if (!track) return null;

  return (
    <section className="radio">
      <h1>Now Playing: KnowNaija Radio</h1>

      <div className="content">
        <div className="meta">
          <h2>{track.title}</h2>
          <p>{track.artist}</p>
          <button className="btn" onClick={toggle}>
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>
        <img src={track.cover} alt="cover" className="cover" />
      </div>

      <div className="progress">
        <span style={{ width: `${pct}%` }} />
        <small>{Math.round(pct)}%</small>
      </div>

      <div className="actions">
        {/* Shuffle */}
        <button
          className={`btn secondary${shuffle ? " active" : ""}`}
          onClick={toggleShuffle}
        >
          {shuffle ? "On" : "Off"}
        </button>

        {/* Previous / Next */}
        <button className="btn secondary" onClick={previous}>
          Previous
        </button>
        <button className="btn secondary" onClick={next}>
          Next
        </button>
      </div>
    </section>
  );
}
