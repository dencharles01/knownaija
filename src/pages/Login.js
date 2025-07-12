// src/pages/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import './Login.css';
import Notification from "../components/Notification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");
  const [err, setErr]     = useState("");
  const [notif, setNotif] = useState("");

  const nav = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setErr("");

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, pass);
      if (!user.emailVerified) {
        setNotif("Email not verified. Please check your inbox.");
        return;
      }

      nav("/"); // ✅ Redirect to homepage or forum
    } catch (e) {
      console.error("Email login failed:", e.message);
      setErr("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    setErr("");

    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "",
          email: user.email,
          avatar: "male",
          createdAt: new Date()
        });
      }

      nav("/"); // ✅ Redirect to homepage or forum
    } catch (e) {
      console.error("Google login error:", e.message);
      setErr("Google sign-in failed.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleEmailLogin}>
        <h2>Login to KnowNaija</h2>
        {err && <p className="error">{err}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          required
        />

        <button className="btn primary w-full">Sign In</button>

        <div className="divider"><span>or</span></div>

        <button
          type="button"
          className="btn google w-full"
          onClick={handleGoogleLogin}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <p className="helper-link">
          <a href="/forgot">Forgot Password?</a>
        </p>
      </form>

      <Notification
        message={notif}
        onClose={() => setNotif("")}
      />
    </div>
  );
}
