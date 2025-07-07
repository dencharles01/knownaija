// src/components/RadioPlayer.js
import { useState, useRef, useEffect, useCallback } from 'react';
import './radioPlayer.css';

export default function RadioPlayer() {
  /* -------------------------------------------------------------------- */
  /* state & refs                                                         */
  /* -------------------------------------------------------------------- */
  const [playlist, setPlaylist] = useState([]);
  const [current, setCurrent]  = useState(0);     // index in playlist
  const [playing, setPlaying]  = useState(false);
  const [pct, setPct]          = useState(0);     // progress %
  const audioRef               = useRef(null);

  /* -------------------------------------------------------------------- */
  /* 1 ▸ fetch playlist once                                              */
  /* -------------------------------------------------------------------- */
  useEffect(() => {
    fetch('/radio/playlist.json')
      .then(r => r.json())
      .then(setPlaylist)
      .catch(console.error);
  }, []);

  /* -------------------------------------------------------------------- */
  /* 2 ▸ helper: attach src only on demand                                */
  /* -------------------------------------------------------------------- */
  const playTrack = useCallback(
    (idx, autoplay = true) => {
      if (!playlist.length) return;
      const track = playlist[idx];
      const audio = audioRef.current;
      if (!audio) return;

      /* Re-attach src if it changed or hasn’t been set yet */
      const absoluteUrl = new URL(track.src, window.location.origin).href;
      if (audio.src !== absoluteUrl) {
        audio.src = track.src;  // path like "/radio/know-yourself.mp3"
        audio.load();           // respects preload="none"
      }

      /* Toggle playback based on intent */
      if (autoplay) {
        audio.play().catch(() => {});   // ignore play() promise errors
      } else {
        audio.pause();
        setPlaying(false);
      }
    },
    [playlist]
  );

  /* -------------------------------------------------------------------- */
  /* 3 ▸ track navigation                                                 */
  /* -------------------------------------------------------------------- */
  const goto = useCallback(
    (dir) =>
      setCurrent((i) =>
        playlist.length ? (i + dir + playlist.length) % playlist.length : 0
      ),
    [playlist.length]
  );

  /* -------------------------------------------------------------------- */
  /* 4 ▸ auto-load next track when index changes *while playing*          */
  /* -------------------------------------------------------------------- */
  useEffect(() => {
    if (playing) playTrack(current, true);   // auto-advance
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  /* -------------------------------------------------------------------- */
  /* early exit: still fetching playlist                                  */
  /* -------------------------------------------------------------------- */
  if (!playlist.length) return null;

  const track = playlist[current];

  /* -------------------------------------------------------------------- */
  /* UI                                                                   */
  /* -------------------------------------------------------------------- */
  return (
    <section className="radio">
      <h1>Now Playing: KnowNaija Radio</h1>

      <div className="content">
        <div className="meta">
          <h2>{track.title}</h2>
          <p>{track.artist}</p>

          <button
            className="btn"
            onClick={() => {
              if (!playing) {
                /* First click OR resume */
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

      {/* progress bar ---------------------------------------------------- */}
      <div className="progress">
        <span style={{ width: pct + '%' }} />
        <small>{Math.round(pct)}%</small>
      </div>

      {/* actions --------------------------------------------------------- */}
      <div className="actions">
        <button className="btn secondary" onClick={() => goto(-1)}>
          Previous
        </button>
        <button className="btn secondary" onClick={() => goto(1)}>
          Next
        </button>
      </div>

      {/* hidden <audio> element — downloads only after playTrack() sets src */}
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
          /* playTrack() will autostart because `playing` stays true */
        }}
      />
    </section>
  );
}
