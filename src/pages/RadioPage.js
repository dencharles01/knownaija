// src/pages/RadioPage.js
import React from 'react';
import { useRadio } from '../contexts/RadioContext';
import '../components/radioPlayer.css';

export default function RadioPage() {
  const {
    track,          // current track object { title, artist, cover }
    pct,            // playback progress %
    playing,        // boolean – is audio playing?
    toggle,         // play / pause handler
    next,           // jump to next track
    previous,       // jump to previous track
    shuffle,        // boolean – shuffle mode on/off
    toggleShuffle,  // handler to flip shuffle
  } = useRadio();

  /* -------------------------------------------------------------- */
  /* loading state (playlist fetch in progress)                     */
  /* -------------------------------------------------------------- */
  if (!track) {
    return (
      <p style={{ textAlign: 'center', padding: '2rem' }}>
        Loading&nbsp;radio…
      </p>
    );
  }

  /* -------------------------------------------------------------- */
  /* main UI                                                        */
  /* -------------------------------------------------------------- */
  return (
    <section className="radio">
      <h1>Now Playing: KnowNaija Radio</h1>

      {/* meta + cover --------------------------------------------- */}
      <div className="content">
        <div className="meta">
          <h2>{track.title}</h2>
          <p>{track.artist}</p>

          <button className="btn" onClick={toggle}>
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>

        <img src={track.cover} alt={track.title} className="cover" />
      </div>

      {/* progress bar --------------------------------------------- */}
      <div className="progress">
        <span style={{ width: `${pct}%` }} />
        <small>{Math.round(pct)}%</small>
      </div>

      {/* controls -------------------------------------------------- */}
      <div className="actions">
        {/* shuffle toggle */}
        <button
          className={`btn secondary${shuffle ? ' active' : ''}`}
          onClick={toggleShuffle}
        >
          Shuffle&nbsp;{shuffle ? 'On' : 'Off'}
        </button>

        {/* previous / next */}
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
