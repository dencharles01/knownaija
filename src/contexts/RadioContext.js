// src/contexts/RadioContext.js
import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import playlistData from '../data/playlist.json';

const RadioCtx = createContext(null);
export const useRadio = () => useContext(RadioCtx);

export function RadioProvider({ children }) {
  /* shared <audio> element */
  const audioRef = useRef(null);

  /* create it once */
  useEffect(() => {
    if (!audioRef.current) {
      const a = new Audio();
      a.preload = 'none';    // no auto-downloads
      audioRef.current = a;
    }
  }, []);

  /* state */
  const playlist = playlistData;
  const [current,  setCurrent]  = useState(0);
  const [playing,  setPlaying]  = useState(false);
  const [shuffle,  setShuffle]  = useState(false);
  const [pct,      setPct]      = useState(0);

  /* restore saved position/shuffle */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('radioState') || '{}');
    if (saved.current != null && saved.current < playlist.length)
      setCurrent(saved.current);
    if (saved.shuffle != null) setShuffle(saved.shuffle);
    if (saved.playing) play(saved.current ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* helper */
  const loadSrc = (index) => {
    const audio = audioRef.current;
    const url   = playlist[index].src;
    if (audio.src !== new URL(url, window.location.origin).href) {
      audio.src = url;
      audio.load();
    }
  };

  /* controls */
  const play = (index = current) => {
    loadSrc(index);
    audioRef.current.play().catch(console.error);
    setPlaying(true);
  };
  const pause  = () => { audioRef.current.pause(); setPlaying(false); };
  const toggle = () => { playing ? pause() : play(); };

  const next = useCallback(() => {
    setCurrent(i => {
      const len = playlist.length;
      if (shuffle && len > 1) {
        let r; do { r = Math.floor(Math.random() * len); } while (r === i);
        return r;
      }
      return (i + 1) % len;
    });
    setPlaying(true);
  }, [playlist.length, shuffle]);

  const previous = () => {
    setCurrent(i => (i - 1 + playlist.length) % playlist.length);
    setPlaying(true);
  };

  const toggleShuffle = () => setShuffle(s => !s);

  /* change track while playing */
  useEffect(() => {
    if (playing) play(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  /* progress + ended */
  useEffect(() => {
    const audio = audioRef.current;
    const onTime  = () => setPct((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', next);
    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', next);
    };
  }, [next]);

  /* persist */
  useEffect(() => {
    localStorage.setItem(
      'radioState',
      JSON.stringify({ current, playing, shuffle })
    );
  }, [current, playing, shuffle]);

  /* expose */
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
