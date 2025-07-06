import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, total, category = "General" } = location.state || {};

  // Save quiz history locally
  useEffect(() => {
    if (score !== undefined && total !== undefined) {
      const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
      const newEntry = {
        date: new Date().toLocaleString(),
        score,
        total,
        category
      };
      history.push(newEntry);
      localStorage.setItem('quizHistory', JSON.stringify(history));
    }
  }, [score, total, category]);

  // Save to Firebase leaderboard
  useEffect(() => {
    const saveToLeaderboard = async () => {
      if (score === undefined || total === undefined) return;

      const user = auth.currentUser;
      if (!user) return; // Don't save if not logged in

      const scorePercentage = Math.round((score / total) * 100);

      try {
        await addDoc(collection(db, 'leaderboard'), {
          name: user.displayName || user.email || "Anonymous",
          email: user.email,
          uid: user.uid,
          score: scorePercentage,
          category,
          date: serverTimestamp()
        });
      } catch (error) {
        console.error("Error saving leaderboard entry:", error);
      }
    };

    saveToLeaderboard();
  }, [score, total, category]);

  const handleRestart = () => {
    navigate('/quiz');
  };

  const handleShare = () => {
    const message = `I scored ${score} out of ${total} on the KnowNaija Quiz! 🇳🇬🎉 Try it yourself!`;
    navigator.clipboard.writeText(message);
    alert('Score copied to clipboard! Paste it anywhere to share.');
  };

  if (score === undefined) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Oops! No score to show. Start the quiz first.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🎉 Quiz Complete!</h1>
      <p>You scored <strong>{score}</strong> out of <strong>{total}</strong>.</p>
      <div style={{ margin: '1rem 0' }}>
        <button onClick={handleRestart} style={{ marginRight: '1rem' }}>Try Again</button>
        <button onClick={handleShare} style={{ marginRight: '1rem' }}>Share Your Score</button>
        <button onClick={() => navigate('/profile')}>View History</button>
      </div>
    </div>
  );
}
