// src/contexts/RadioContext.js
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';

const RadioCtx = createContext(null);
export const useRadio = () => useContext(RadioCtx);

export function RadioProvider({ children }) {
  /* ───────────────── shared <audio> element ───────────────── */
  const audioRef = useRef(new Audio());

  /* ───────────────── state ───────────────── */
  const [playlist, setPlaylist] = useState([]);
  const [current,  setCurrent]  = useState(0);
  const [playing,  setPlaying]  = useState(false);
  const [shuffle,  setShuffle]  = useState(false);
  const [pct,      setPct]      = useState(0);

  /* ── 1. load playlist once, then restore saved state ───────── */
  useEffect(() => {
    fetch('/radio/playlist.json')
      .then(r => r.json())
      .then(list => {
        setPlaylist(list);

        /** restore from localStorage (if within bounds) */
        const saved = JSON.parse(localStorage.getItem('radioState') || '{}');
        if (saved.current != null && saved.current < list.length) {
          setCurrent(saved.current);
        }
        if (saved.shuffle != null) setShuffle(saved.shuffle);
        if (saved.playing) setPlaying(true);   // triggers .play() later
      })
      .catch(console.error);
  }, []);

  /* ── helper: go to the next track (normal or shuffled) ─────── */
  const next = useCallback(() => {
    setCurrent(i => {
      const len = playlist.length;
      if (shuffle && len > 1) {
        let rand;
        do { rand = Math.floor(Math.random() * len); } while (rand === i);
        return rand;
      }
      return (i + 1) % len;
    });
    setPlaying(true);
  }, [playlist, shuffle]);

  /* ── 2. attach timeupdate / ended listeners once ───────────── */
  useEffect(() => {
    const audio = audioRef.current;

    const onTime  = () =>
      setPct((audio.currentTime / audio.duration) * 100 || 0);

    const onEnded = () => {
      if (playlist.length) next();
    };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, [playlist.length, next]);

  /* ── 3. change source whenever track / play-state changes ──── */
  useEffect(() => {
    if (!playlist.length) return;

    const audio = audioRef.current;
    audio.src = playlist[current].src;
    audio.load();

    if (playing) {
      audio.play().catch(console.error);
    }
  }, [current, playlist, playing]);

  /* ── 4. persist key state so refresh resumes playback ─────── */
  useEffect(() => {
    const state = { current, playing, shuffle };
    localStorage.setItem('radioState', JSON.stringify(state));
  }, [current, playing, shuffle]);

  /* ── playback controls ─────────────────────────────────────── */
  const play   = () => { audioRef.current.play().catch(console.error); setPlaying(true); };
  const pause  = () => { audioRef.current.pause();                     setPlaying(false); };
  const toggle = () => { playing ? pause() : play(); };

  const previous = () => {
    setCurrent(i => (i - 1 + playlist.length) % playlist.length);
    setPlaying(true);
  };

  /* ── shuffle: keep audio playing whether turning ON or OFF ─── */
  const toggleShuffle = () => {
    setShuffle(s => {
      const on = !s;

      if (on && playlist.length > 1) {
        /* jump to a brand-new random track immediately */
        setCurrent(i => {
          let rand;
          do {
            rand = Math.floor(Math.random() * playlist.length);
          } while (rand === i);
          return rand;
        });
      }

      return on;
    });

    /* guarantee playback continues after the toggle */
    if (playlist.length) {
      audioRef.current.play().catch(console.error);
      setPlaying(true);
    }
  };

  /* ── expose state & controls ───────────────────────────────── */
  const value = {
    playlist,
    track: playlist[current],
    current,
    pct,
    playing,
    shuffle,
    play,
    pause,
    toggle,
    next,
    previous,
    toggleShuffle,
  };

  return <RadioCtx.Provider value={value}>{children}</RadioCtx.Provider>;
}
