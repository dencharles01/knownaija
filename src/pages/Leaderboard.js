import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from 'firebase/firestore';

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const q = query(
          collection(db, 'leaderboard'),
          orderBy('score', 'desc'),
          limit(50) // fetch more, then filter top 10 per category
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScores(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchScores();
  }, []);

  const filtered = selectedCategory === 'All'
    ? scores
    : scores.filter(entry => entry.category === selectedCategory);

  const top10 = filtered.slice(0, 10);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🏆 Top 10 Quiz Scores</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="History">History</option>
          <option value="Culture">Culture</option>
          <option value="Pop Culture">Pop Culture</option>
          <option value="Food">Food</option>
          <option value="Geography">Geography</option>
          <option value="Naija Sports">Naija Sports</option>
        </select>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={cellStyle}>#</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Score (%)</th>
            <th style={cellStyle}>Category</th>
            <th style={cellStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((entry, index) => (
            <tr key={entry.id}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{entry.name}</td>
              <td style={cellStyle}>{entry.score}</td>
              <td style={cellStyle}>{entry.category}</td>
              <td style={cellStyle}>
                {entry.date?.toDate?.().toLocaleDateString('en-GB') || 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: '1px solid #ccc',
  padding: '0.75rem',
  textAlign: 'left'
};
