// src/pages/Quiz.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { Helmet } from 'react-helmet';
import questions from '../data/questions';
import useSFX from '../hooks/useSFX';

export default function Quiz() {
  const nav = useNavigate();
  const { category: cat = null, difficulty: diff = null } = useLocation().state ?? {};

  const muted = false;
  const play = useSFX(muted);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [pick, setPick] = useState(null);
  const [show, setShow] = useState(false);
  const [misses, setMisses] = useState([]);
  const [time, setTime] = useState(20);

  const [streak, setStreak] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [boom, setBoom] = useState(false);

  const pool = useMemo(() => {
    const subset = questions.filter(
      q =>
        q &&
        (!cat || q.category === cat) &&
        (!diff || q.difficulty === diff)
    );
    for (let i = subset.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [subset[i], subset[j]] = [subset[j], subset[i]];
    }
    return subset;
  }, [cat, diff]);

  const isEmpty = pool.length === 0;
  const Q = pool[idx];

  const finish = useCallback(
    finalScore =>
      nav('/result', {
        state: { score: finalScore, total: pool.length, misses, bonus }
      }),
    [nav, pool.length, misses, bonus]
  );

  const next = useCallback(() => {
    const correct = pick === Q?.answer;
    let newStreak = correct ? streak + 1 : 0;
    let extra = 0;

    if (newStreak !== 0 && newStreak % 3 === 0) {
      extra = 2;
      setBoom(true);
      setTimeout(() => setBoom(false), 3000);
      setBonus(b => b + extra);
    }

    const newScore = correct ? score + 1 + extra : score;

    if (!correct) setMisses(m => [...m, { q: Q.question, a: Q.answer }]);

    if (idx + 1 < pool.length) {
      setScore(newScore);
      setIdx(i => i + 1);
      setPick(null);
      setShow(false);
      setStreak(newStreak);
    } else {
      finish(newScore);
    }
  }, [pick, Q, idx, pool.length, score, finish, streak]);

  useEffect(() => {
    if (isEmpty) return;
    if (time === 0) { next(); return; }
    const t = setTimeout(() => setTime(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [time, next, isEmpty]);

  useEffect(() => { if (!isEmpty) setTime(20); }, [idx, isEmpty]);

  if (isEmpty) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Helmet>
          <title>No Questions | KnowNaija</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h2>No questions found for &ldquo;{cat || 'General'}&rdquo;{diff && ` · ${diff}`}</h2>
        <button onClick={() => nav('/')}>Back to Home</button>
      </div>
    );
  }

  const pct = (idx / pool.length) * 100;
  const title = cat || 'General';
  const subtitle = `${title}${diff ? ` · ${diff}` : ''} Quiz`;
  const fullTitle = `${subtitle} | KnowNaija`;
  const pageUrl = window.location.href;

  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: 'auto', textAlign: 'center' }}>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={`Take the ${subtitle} and test your knowledge of Nigerian culture, food, history, and more.`} />
        <meta name="robots" content="index, follow" />

        {/* Social Sharing (OG) */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content="Challenge yourself with real Nigerian culture and history questions." />
        <meta property="og:image" content="https://yourdomain.com/og-banner.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      {boom && <Confetti numberOfPieces={220} recycle={false} />}

      <h2>
        {subtitle}
        {streak > 1 && <span style={{ fontSize: 16, color: '#ff9800', marginLeft: 6 }}>🔥 x{streak}</span>}
      </h2>

      <div style={{ background: '#e9ecef', borderRadius: 8, overflow: 'hidden', height: 12, margin: '1rem 0' }}>
        <div style={{ width: `${pct}%`, background: '#198754', height: '100%' }} />
      </div>

      <p>Question {idx + 1} / {pool.length}</p>
      <div style={{ color: '#d6336c', fontWeight: 600, margin: '1rem 0' }}>⏱ {time}s</div>
      {bonus > 0 && <p style={{ color: '#ff9800', margin: 0 }}>Bonus&nbsp;+{bonus}</p>}

      <p style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>{Q.question}</p>

      {Q.options.map((opt, i) => {
        const correct = opt === Q.answer;
        const chosen = opt === pick;

        const bg = show
          ? correct ? '#198754'
          : chosen ? '#dc3545'
          : '#f0f0f0'
          : chosen ? '#0d6efd'
          : '#f0f0f0';

        const txt = show && (correct || chosen) ? '#fff'
          : chosen ? '#fff'
          : '#000';

        return (
          <button
            key={i}
            disabled={show}
            onClick={() => {
              play('click');
              const isCorrect = opt === Q.answer;
              setPick(opt);
              setShow(true);
              setTimeout(() => play(isCorrect ? 'correct' : 'wrong'), 0);
            }}
            style={{
              display: 'block', margin: '0.4rem auto',
              padding: '0.55rem 1.2rem', minWidth: 240,
              borderRadius: 6, border: 0, background: bg,
              color: txt, cursor: show ? 'default' : 'pointer'
            }}
          >
            {opt}
          </button>
        );
      })}

      {show && (
        <p style={{ marginTop: '0.8rem', fontWeight: 600 }}>
          {pick === Q.answer
            ? '✅ Correct!'
            : <>❌ Oops – the right answer was <em>{Q.answer}</em></>}
        </p>
      )}

      <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          onClick={() => { play('click'); next(); }}
          disabled={!show}
          style={{
            padding: '0.55rem 1.5rem', borderRadius: 6, border: 0,
            background: show ? '#198754' : '#bbb', color: '#fff',
            cursor: show ? 'pointer' : 'not-allowed'
          }}
        >
          {idx + 1 === pool.length ? 'Finish' : 'Next'}
        </button>

        <button
          onClick={() => { play('click'); finish(score); }}
          style={{
            padding: '0.55rem 1.5rem',
            border: '1px solid #dc3545', borderRadius: 6,
            background: '#fff', color: '#dc3545'
          }}
        >
          End&nbsp;Quiz
        </button>
      </div>
    </div>
  );
}
