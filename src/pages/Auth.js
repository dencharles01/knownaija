// ──────────────────────────────────────────────
// src/pages/Auth.js
// ──────────────────────────────────────────────
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../firebase";

export default function Auth() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      // fire the popup, no unused `result` variable
      await signInWithPopup(auth, googleProvider);
      // on success, go to profile
      navigate("/profile");
    } catch (err) {
      console.error("Google sign-in error:", err.message);
      setError("Google sign-in failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Login to KnowNaija</h2>
      {error && <p style={errorStyle}>{error}</p>}
      <button
        onClick={handleGoogleLogin}
        style={googleButtonStyle}
        disabled={loading}
      >
        {loading ? "Please wait…" : "Sign in with Google"}
      </button>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Styles
   ────────────────────────────────────────────── */
const containerStyle = {
  maxWidth: 400,
  margin: "4rem auto",
  padding: "2rem",
  border: "1px solid #ccc",
  borderRadius: 10,
  textAlign: "center",
  background: "#fff",
};

const titleStyle = {
  marginBottom: "1.5rem",
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: "#222",
};

const errorStyle = {
  color: "red",
  fontSize: "0.95rem",
  marginBottom: "1rem",
};

const googleButtonStyle = {
  width: "100%",
  padding: "0.75rem",
  background: "#fff",
  color: "#333",
  border: "1px solid #ccc",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: "1rem",
};
