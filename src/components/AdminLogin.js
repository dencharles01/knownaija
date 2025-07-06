// src/components/AdminLogin.js
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function signIn(e) {
    e.preventDefault();
    setErr("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErr(error.message);
    } else if (data.session) {
      onSuccess();               // notify parent (AdminStories)
    }
  }

  return (
    <form
      onSubmit={signIn}
      style={{
        maxWidth: 320,
        margin: "4rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button style={{ padding: "0.5rem" }}>Log in</button>

      {err && <p style={{ color: "crimson" }}>{err}</p>}
    </form>
  );
}
