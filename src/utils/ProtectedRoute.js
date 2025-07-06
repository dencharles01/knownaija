import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const verifyAndSync = async () => {
      const current = auth.currentUser;
      if (current) {
        await current.reload();
        const updatedUser = auth.currentUser;
        setUser(updatedUser);

        if (updatedUser.emailVerified) {
          const userRef = doc(db, 'users', updatedUser.uid);
          const snap = await getDoc(userRef);

          if (snap.exists()) {
            await updateDoc(userRef, { emailVerified: true });
          } else {
            console.warn("Firestore user doc not found, skipping update.");
          }
        }
      }
      setLoading(false);
    };

    verifyAndSync();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (!user.emailVerified) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Email Not Verified</h3>
        <p>Please check your inbox and verify your email before continuing.</p>
      </div>
    );
  }

  return children;
}
