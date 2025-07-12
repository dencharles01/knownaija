// src/pages/Register.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './Register.css';
import Notification from '../components/Notification';

export default function Register() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [pass, setPass]     = useState('');
  const [avatar, setAvatar] = useState('male');
  const [err , setErr]      = useState('');
  const [notif, setNotif]   = useState('');

  const nav = useNavigate();

  // Save (or merge) basic user info into Firestore
  const saveUserDoc = async (user, extra = {}) => {
    await setDoc(
      doc(db, 'users', user.uid),
      {
        uid: user.uid,
        name: user.displayName || name,
        email: user.email,
        avatar,
        createdAt: new Date(),
        ...extra
      },
      { merge: true }
    );
  };

  // Handle email/password registration
  const handleEmail = async (e) => {
    e.preventDefault();
    setErr('');

    // optional domain check
    if (email.endsWith('@example.com') || email.endsWith('@test.com')) {
      setErr("Please use a valid personal email address.");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, pass);
      // Set display name
      await updateProfile(user, { displayName: name });
      // Send verification email
      await sendEmailVerification(user);
      // Save to Firestore
      await saveUserDoc(user);
      // Show notification
      setNotif(
        "Account created! A verification email has been sent. Please verify before logging in."
      );
    } catch (e) {
      setErr(e.message);
    }
  };

  // Handle Google sign-up / sign-in
  const handleGoogle = async () => {
    setErr('');
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      // If first-time Google login, save user doc
      const snap = await getDoc(doc(db, 'users', user.uid));
      if (!snap.exists()) {
        await saveUserDoc(user);
      }
      // Redirect home
      nav('/');
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="register-wrapper">
      <form className="register-box" onSubmit={handleEmail}>
        <h2>Create Account</h2>

        {err && <p className="error">{err}</p>}

        <input
          placeholder="Full name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Password"
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          required
        />

        <div className="avatar-row">
          <span>Choose Avatar:</span>
          <label>
            <input
              type="radio"
              value="male"
              checked={avatar === 'male'}
              onChange={() => setAvatar('male')}
            /> Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={avatar === 'female'}
              onChange={() => setAvatar('female')}
            /> Female
          </label>
        </div>

        <button className="btn primary w-full">Sign Up</button>

        <div className="divider"><span>or</span></div>

        <button
          type="button"
          className="btn google w-full"
          onClick={handleGoogle}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <p className="helper-link" style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </form>

      {/* Notification appears when account created */}
      <Notification
        message={notif}
        onClose={() => {
          setNotif('');
          nav('/verify');
        }}
      />
    </div>
  );
}
