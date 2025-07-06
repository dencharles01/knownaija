// src/hooks/useSFX.js
import { useMemo } from 'react';

/**
 * useSFX --------------------------------------------------------------
 * Lightweight helper for interface sounds.
 *
 * ➊  Drop MP3 files under  public/sfx/
 *       click.mp3   – UI tap
 *       correct.mp3 – right answer ding
 *       wrong.mp3   – wrong answer buzz
 *
 * ➋  In a component:
 *       const play = useSFX(isMuted); // or useSFX(isMuted, 0.8)
 *       play('click');                // whenever you need a sound
 *
 * @param {boolean} muted         – global silent-mode toggle (default: false)
 * @param {number}  masterVolume  – 0…1 multiplier applied to every sound
 * -------------------------------------------------------------------- */
export default function useSFX(muted = false, masterVolume = 1) {
  /* ---------- build a tiny “sound bank” exactly once ---------- */
  const bank = useMemo(() => {
    const load = file => {
      const audio = new Audio(`/sfx/${file}`);
      // Let the browser decide buffering, but hint that we'll need it soon:
      audio.preload = 'auto';
      return audio;
    };
    return {
      click:   load('click.mp3'),
      correct: load('correct.mp3'),
      wrong:   load('wrong.mp3')
    };
  }, []);

  /** play('click' | 'correct' | 'wrong') */
  return name => {
    if (muted) return;               // respect silent mode

    const src = bank[name];
    if (!src) return;                // guard unknown keys

    // If a sound is still playing, clone so the second tap is not skipped.
    const audio = src.paused ? src : src.cloneNode(true);

    audio.volume = masterVolume;     // global volume control
    audio.currentTime = 0;           // rewind for rapid taps
    audio.play().catch(() => {});    // iOS & autoplay policy guard
  };
}
