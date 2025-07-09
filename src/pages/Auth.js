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
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/profile");
    } catch (err) {
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
        style={buttonStyle}
        disabled={loading}
      >
        {loading ? "Please wait…" : "Sign in with Google"}
      </button>
    </div>
  );
}

/* ───── Styles ───── */
const containerStyle = {
  maxWidth: 360,
  margin: "6rem auto",
  padding: "2rem",
  backgroundColor: "#008751",  // green background
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  color: "#fff",               // white text inside
};

const titleStyle = {
  marginBottom: "1.5rem",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const errorStyle = {
  color: "#ffdddd",
  backgroundColor: "#a33",
  padding: "0.5rem",
  borderRadius: "6px",
  marginBottom: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#fff",      // white button
  color: "#008751",             // green text
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};
