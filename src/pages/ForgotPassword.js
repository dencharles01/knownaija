// src/pages/ForgotPassword.js

import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [error, setError]     = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent! Check your inbox.");
    } catch (err) {
      console.error("Password reset error:", err);
      setError("❌ " + err.message);
    }
  };

  return (
    <div className="forgot-container">
      <form className="forgot-box" onSubmit={handleReset}>
        <h2>Reset Your Password</h2>

        {message && <p className="success">{message}</p>}
        {error   && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn primary w-full" type="submit">
          Send Reset Link
        </button>

        <p className="helper-link">
          <Link to="/login">← Back to Login</Link>
        </p>
      </form>
    </div>
  );
}
