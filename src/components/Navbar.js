// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import ThemeToggle   from "./ThemeToggle";
import maleAvatar    from "../assets/avatars/male.png";
import femaleAvatar  from "../assets/avatars/female.png";

import "./Navbar.css";

const ADMIN_EMAIL = "dencharles01@gmail.com";

export default function Navbar() {
  const nav = useNavigate();
  const loc = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);

  // ── auth listener ─
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (cu) => {
      setUser(cu);
      if (cu) {
        const snap = await getDoc(doc(db, "users", cu.uid));
        if (snap.exists()) setData(snap.data());
      } else {
        setData(null);
      }
    });
    return unsub;
  }, []);

  const avatarSrc = data?.avatar === "female" ? femaleAvatar : maleAvatar;
  const active = (path) => loc.pathname === path;
  const logOut = async () => {
    await signOut(auth);
    nav("/");
  };

  // nav items (Leaderboard removed)
  const menuItems = [
    { p: "/",             t: "Home" },
    { p: "/quiz",         t: "Quizzes" },
    { p: "/profile",      t: "Profile" },
    // { p: "/leaderboard",  t: "Leaderboard" }, // Disabled for now
    { p: "/radio",        t: "Radio" },
    { p: "/about",        t: "About" },
    { p: "/submit-story", t: "Submit Story" },
  ];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => nav("/")}>
        📍 <strong>KnowNaija</strong>
      </div>

      <div className="toggle-desktop">
        <ThemeToggle />
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {menuItems.map(({ p, t }) => (
          <li key={p}>
            <Link
              to={p}
              className={active(p) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {t}
            </Link>
          </li>
        ))}

        {/* Admin-only link */}
        {user?.email === ADMIN_EMAIL && (
          <li>
            <Link
              to="/admin-stories"
              className={active("/admin-stories") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          </li>
        )}

        {/* Theme toggle (mobile only) */}
        <li className="toggle-mobile">
          <ThemeToggle />
        </li>

        {/* Auth (mobile) */}
        <li className="mobile-auth mt-4">
          {user ? (
            <button
              className="btn secondary w-full"
              onClick={() => {
                setMenuOpen(false);
                logOut();
              }}
            >
              Log&nbsp;Out
            </button>
          ) : (
            <>
              <button
                className="btn primary w-full mb-2"
                onClick={() => {
                  setMenuOpen(false);
                  nav("/register");
                }}
              >
                Sign&nbsp;Up
              </button>
              <button
                className="btn secondary w-full"
                onClick={() => {
                  setMenuOpen(false);
                  nav("/auth");
                }}
              >
                Log&nbsp;In
              </button>
            </>
          )}
        </li>
      </ul>

      <div className="auth-desktop">
        {user ? (
          <>
            <img src={avatarSrc} alt="avatar" className="avatar-icon border" />
            <span>{user.displayName || user.email}</span>
            <button className="btn secondary" onClick={logOut}>
              Log&nbsp;Out
            </button>
          </>
        ) : (
          <>
            <button className="btn primary" onClick={() => nav("/register")}>
              Sign&nbsp;Up
            </button>
            <button className="btn secondary" onClick={() => nav("/auth")}>
              Log&nbsp;In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
