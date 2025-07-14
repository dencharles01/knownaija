// src/components/RadioPlayer.js
import { useState, useRef, useEffect, useCallback } from 'react';
import './radioPlayer.css';

export default function RadioPlayer() {
  const [playlist, setPlaylist] = useState([]);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch('/radio/playlist.json')
      .then(r => r.json())
      .then(setPlaylist)
      .catch(console.error);
  }, []);

  const playTrack = useCallback(
    (idx, autoplay = true) => {
      if (!playlist.length) return;
      const track = playlist[idx];
      const audio = audioRef.current;
      if (!audio) return;

      const absoluteUrl = new URL(track.src, window.location.origin).href;
      if (audio.src !== absoluteUrl) {
        audio.src = track.src;
        audio.load();
      }

      if (autoplay) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
        setPlaying(false);
      }
    },
    [playlist]
  );

  const goto = useCallback(
    (dir) =>
      setCurrent((i) =>
        playlist.length ? (i + dir + playlist.length) % playlist.length : 0
      ),
    [playlist.length]
  );

  useEffect(() => {
    if (playing) playTrack(current, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  if (!playlist.length) return null;

  const track = playlist[current];

  return (
    <section className="radio">
      <h1>Now Playing: KnowNaija Radio</h1>

      <div className="content">
        <div className="meta">
          <h2>{track.title}</h2>
          <p>{track.artist}</p>

          <button
            className="btn"
            onClick={(e) => {
              e.currentTarget.blur(); // Prevent sticky focus on mobile

              if (!playing) {
                playTrack(current, true);
                setPlaying(true);
              } else {
                audioRef.current.pause();
                setPlaying(false);
              }
            }}
          >
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
        </div>

        <img src={track.cover} alt={track.title} className="cover" />
      </div>

      <div className="progress">
        <span style={{ width: pct + '%' }} />
        <small>{Math.round(pct)}%</small>
      </div>

      <div className="actions">
        <button
          className="btn secondary"
          onClick={(e) => {
            e.currentTarget.blur(); // Prevent sticky focus on mobile
            goto(-1);
          }}
        >
          Previous
        </button>

        <button
          className="btn secondary"
          onClick={(e) => {
            e.currentTarget.blur(); // Prevent sticky focus on mobile
            goto(1);
          }}
        >
          Next
        </button>
      </div>

      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={() => {
          const a = audioRef.current;
          setPct((a.currentTime / a.duration) * 100 || 0);
        }}
        onEnded={() => {
          goto(1);
        }}
      />
    </section>
  );
}
