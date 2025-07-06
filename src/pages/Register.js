import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Notification from '../components/Notification'; // ✅ import Notification component

export default function Register() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [pass, setPass]     = useState('');
  const [avatar, setAvatar] = useState('male');
  const [err , setErr]      = useState('');
  const [notif, setNotif]   = useState(''); // ✅ custom popup message

  const nav = useNavigate();

  const saveUserDoc = async (user, extra = {}) => {
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name: user.displayName || name,
      email: user.email,
      avatar,
      createdAt: new Date(),
      ...extra
    }, { merge: true });
  };

  const handleEmail = async e => {
    e.preventDefault();
    setErr('');

    if (email.endsWith('@example.com') || email.endsWith('@test.com')) {
      setErr("Please use a valid personal email address.");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(user, { displayName: name });
      await sendEmailVerification(user);
      await saveUserDoc(user);
      setNotif("Account created. A verification email has been sent. Please verify your email before logging in.");
    } catch (e) {
      setErr(e.message);
    }
  };

  const handleGoogle = async () => {
    setErr('');
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const snap = await getDoc(doc(db, 'users', user.uid));
      if (!snap.exists()) await saveUserDoc(user);
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
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Password"
          value={pass}
          type="password"
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
            alt="G"
          />
          Continue with Google
        </button>
      </form>

      {/* ✅ Notification modal */}
      <Notification message={notif} onClose={() => {
        setNotif('');
        nav('/verify');
      }} />
    </div>
  );
}
