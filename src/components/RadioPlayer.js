import { useState, useRef, useEffect, useCallback } from "react";
import "./radioPlayer.css";

export default function RadioPlayer() {
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pct, setPct] = useState(0);
  const audioRef = useRef(null);

  /* 1 ▸ load playlist once */
  useEffect(() => {
    fetch("/radio/playlist.json")
      .then(r => r.json())
      .then(setList)
      .catch(console.error);
  }, []);

  /* 2 ▸ swap source when “current” changes */
  useEffect(() => {
    if (!list.length) return;
    const audio = audioRef.current;
    audio.src = list[current].src;
    audio.load();
    if (playing) audio.play();          // auto-start if we’re in play mode
  }, [current, list]);

  /* 3 ▸ helpers */
  const goto = useCallback(
    dir => setCurrent(i => (list.length ? (i + dir + list.length) % list.length : 0)),
    [list.length]
  );

  if (!list.length) return null;        // still fetching playlist

  const track = list[current];

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
              const a = audioRef.current;
              playing ? a.pause() : a.play();
            }}
          >
            {playing ? "⏸ Pause" : "▶ Play"}
          </button>
        </div>

        <img src={track.cover} alt="cover" className="cover" />
      </div>

      <div className="progress">
        <span style={{ width: pct + "%" }} />
        <small>{Math.round(pct)}%</small>
      </div>

      <div className="actions">
        <button className="btn secondary" onClick={() => goto(-1)}>Previous</button>
        <button className="btn secondary" onClick={() => goto(1)}>Next</button>
      </div>

      <audio
        ref={audioRef}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={() => {
          const a = audioRef.current;
          setPct((a.currentTime / a.duration) * 100 || 0);
        }}
        onEnded={() => {
          setPlaying(true);   // keep “play” mode alive
          goto(1);            // jump to next track
        }}
      />
    </section>
  );
}
