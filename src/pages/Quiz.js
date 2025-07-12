// src/pages/Quiz.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { Helmet } from 'react-helmet';
import questions from '../data/questions';
import useSFX from '../hooks/useSFX';

import './Quiz.css';

export default function Quiz() {
  const nav = useNavigate();
  const { category: cat = null, difficulty: diff = null } =
    useLocation().state ?? {};

  const play = useSFX(false);
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
    const correct = pick === Q.answer;
    const newStreak = correct ? streak + 1 : 0;
    let extra = 0;

    if (newStreak && newStreak % 3 === 0) {
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
    if (time === 0) {
      next();
      return;
    }
    const t = setTimeout(() => setTime(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [time, next, isEmpty]);

  useEffect(() => {
    if (!isEmpty) setTime(20);
  }, [idx, isEmpty]);

  if (isEmpty) {
    return (
      <div className="quiz-container">
        <Helmet>
          <title>No Questions | KnowNaija</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h2 className="quiz-title" style={{ color: '#28a745' }}>
          No questions found for “{cat || 'General'}”
          {diff && ` · ${diff}`}
        </h2>
        <button className="btn secondary" onClick={() => nav('/')}>
          Back to Home
        </button>
      </div>
    );
  }

  const pct = (idx / pool.length) * 100;
  const title = cat || 'General';
  const subtitle = `${title}${diff ? ` · ${diff}` : ''} Quiz`;
  const fullTitle = `${subtitle} | KnowNaija`;
  const pageUrl = window.location.href;

  return (
    <div className="quiz-container">
      <Helmet>
        <title>{fullTitle}</title>
        <meta
          name="description"
          content={`Take the ${subtitle} and test your knowledge of Nigerian culture, food, history, and more.`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={fullTitle} />
        <meta
          property="og:description"
          content="Challenge yourself with real Nigerian culture and history questions."
        />
        <meta property="og:image" content="https://yourdomain.com/og-banner.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      {boom && <Confetti numberOfPieces={220} recycle={false} />}

      <div className="quiz-header">
        <h2 className="quiz-title" style={{ color: '#28a745' }}>{subtitle}</h2>
        {streak > 1 && <span className="quiz-bonus">🔥 x{streak}</span>}
        <p className="quiz-subtitle">
          Question {idx + 1} / {pool.length}
        </p>
      </div>

      <div className="quiz-progress">
        <div className="fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="quiz-timer">⏱ {time}s</div>
      {bonus > 0 && <p className="quiz-bonus">Bonus +{bonus}</p>}

      <p className="quiz-question">{Q.question}</p>

      {Q.options.map((opt, i) => {
        const correct = opt === Q.answer;
        const chosen = opt === pick;
        const bg = show
          ? correct
            ? '#198754'
            : chosen
            ? '#dc3545'
            : '#f0f0f0'
          : chosen
          ? '#0d6efd'
          : '#f0f0f0';
        const txt = show && (correct || chosen) ? '#fff' : chosen ? '#fff' : '#000';

        return (
          <button
            key={i}
            className="quiz-option"
            disabled={show}
            style={{ background: bg, color: txt }}
            onClick={() => {
              play('click');
              setPick(opt);
              setShow(true);
              setTimeout(() => play(opt === Q.answer ? 'correct' : 'wrong'), 0);
            }}
          >
            {opt}
          </button>
        );
      })}

      {show && (
        <p className="quiz-feedback">
          {pick === Q.answer
            ? '✅ Correct!'
            : <>❌ Oops – the right answer was <em>{Q.answer}</em></>}
        </p>
      )}

      <div className="quiz-actions">
        <button
          onClick={() => {
            play('click');
            next();
          }}
          disabled={!show}
          className="btn next-btn"
        >
          {idx + 1 === pool.length ? 'Finish' : 'Next'}
        </button>
        <button
          onClick={() => {
            play('click');
            finish(score);
          }}
          className="btn end-btn"
        >
          End Quiz
        </button>
      </div>
    </div>
  );
}
