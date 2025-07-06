// src/contexts/RadioContext.js
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

const RadioCtx = createContext(null);
export const useRadio = () => useContext(RadioCtx);

export function RadioProvider({ children }) {
  /* Shared <audio> element */
  const audioRef = useRef(new Audio());

  /* State */
  const [playlist, setPlaylist]   = useState([]);
  const [current,  setCurrent]    = useState(0);
  const [playing,  setPlaying]    = useState(false);
  const [shuffle,  setShuffle]    = useState(false);
  const [pct,      setPct]        = useState(0);

  /* Load playlist once */
  useEffect(() => {
    fetch("/radio/playlist.json")
      .then((r) => r.json())
      .then(setPlaylist)
      .catch(console.error);
  }, []);

  /* ----------  NEXT helper (declare before effects that use it) ---------- */
  const next = useCallback(() => {
    setCurrent((i) => {
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
  /* ---------------------------------------------------------------------- */

  /* Time-update & ended listeners */
  useEffect(() => {
    const audio = audioRef.current;

    const onTime  = () =>
      setPct((audio.currentTime / audio.duration) * 100 || 0);

    const onEnded = () => {
      if (playlist.length) next();            // uses next declared above
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [playlist.length, next]);

  /* Swap source when track / play-state changes */
  useEffect(() => {
    if (!playlist.length) return;

    const audio = audioRef.current;
    audio.src = playlist[current].src;
    audio.load();

    if (playing) {
      audio.play().catch(console.error);
    }
  }, [current, playlist, playing]);

  /* Playback controls */
  const play   = () => { audioRef.current.play().catch(console.error); setPlaying(true); };
  const pause  = () => { audioRef.current.pause();                    setPlaying(false); };
  const toggle = () => { playing ? pause() : play(); };

  const previous = () => {
    setCurrent((i) => (i - 1 + playlist.length) % playlist.length);
    setPlaying(true);
  };

  const toggleShuffle = () => setShuffle((s) => !s);

  /* Expose state & controls */
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
