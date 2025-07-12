// src/pages/Auth.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../firebase";

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError("Email/password login failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (err) {
      setError("Google sign-in failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login to KnowNaija</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleEmailLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.signInBtn} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div style={styles.divider}>
        <span style={styles.line} />
        <span style={styles.or}>or</span>
        <span style={styles.line} />
      </div>

      <button
        onClick={handleGoogleLogin}
        style={styles.googleButton}
        disabled={loading}
      >
        {loading ? "Please wait…" : "Continue with Google"}
      </button>

      <div style={styles.forgot}>
        <a href="/reset-password" style={styles.forgotLink}>Forgot Password?</a>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Inline Styles
────────────────────────────────────────────── */
const styles = {
  container: {
    maxWidth: 400,
    margin: "4rem auto",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: 10,
    textAlign: "center",
    background: "#fff",
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#222",
  },
  error: {
    color: "red",
    fontSize: "0.95rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  signInBtn: {
    padding: "0.75rem",
    background: "#008751",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: "1rem",
    cursor: "pointer",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: "1.5rem 0",
  },
  or: {
    fontSize: "0.9rem",
    color: "#555",
  },
  line: {
    flex: 1,
    height: "1px",
    background: "#ddd",
  },
  googleButton: {
    width: "100%",
    padding: "0.75rem",
    background: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "1rem",
  },
  forgot: {
    marginTop: "1rem",
  },
  forgotLink: {
    color: "#28a745",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};
