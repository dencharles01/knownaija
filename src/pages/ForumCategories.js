import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './ForumCategories.css';

function ForumCategories() {
  const [categories, setCategories] = useState([]);

  // fetch once
  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, 'forumCategories'));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      data.sort((a, b) => a.title.localeCompare(b.title));
      setCategories(data);
    })();
  }, []);

  return (
    <div className="forum-categories">
      <h1>Forum Categories</h1>

      <div className="category-grid">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/forums/${cat.id}`}
            state={{ catName: cat.title }}   // pass title forward
            className="category-card"
          >
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ForumCategories;
