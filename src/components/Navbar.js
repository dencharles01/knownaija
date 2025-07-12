import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  auth,
  db,
  onAuthStateChanged,
  signOut,
  getDoc,
  doc,
} from "../firebase";

import ThemeToggle from "./ThemeToggle";
import maleAvatar from "../assets/avatars/male.png";
import femaleAvatar from "../assets/avatars/female.png";

import "./Navbar.css";

const ADMIN_EMAIL = "dencharles01@gmail.com";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser]         = useState(null);
  const [profile, setProfile]   = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (cu) => {
      setUser(cu);
      if (cu) {
        const snap = await getDoc(doc(db, "users", cu.uid));
        if (snap.exists()) setProfile(snap.data());
      } else {
        setProfile(null);
      }
    });
    return unsub;
  }, []);

  const isActive = (path) => location.pathname === path;
  const avatar   = profile?.avatar === "female" ? femaleAvatar : maleAvatar;

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const items = [
    { to: "/",        label: "Home"    },
    { to: "/quiz",    label: "Quizzes" },
    { to: "/profile", label: "Profile" },
    { to: "/radio",   label: "Radio"   },
    { to: "/about",   label: "About"   },
  ];

  if (user?.email === ADMIN_EMAIL) {
    items.push({ to: "/submit-story",  label: "Submit Story"  });
    items.push({ to: "/admin-stories", label: "Admin"         });
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          📍 <strong>KnowNaija</strong>
        </div>

        {/* Desktop theme toggle */}
        <div className="toggle-desktop">
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          {items.map(({ to, label }) => (
            <li key={to} onClick={() => setMenuOpen(false)}>
              <Link to={to} className={isActive(to) ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile-only theme toggle */}
          <li className="toggle-mobile">
            <ThemeToggle />
          </li>

          {/* Mobile-only auth buttons */}
          <li className="mobile-auth">
            {user ? (
              <button
                className="btn secondary w-full"
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button
                    className="btn secondary w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    className="btn secondary w-full"
                    style={{ marginTop: 8 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </li>
        </ul>

        {/* Desktop auth / avatar */}
        <div className="auth-desktop">
          {user ? (
            <>
              <img
                src={avatar}
                alt="avatar"
                className="avatar-icon border"
              />
              <span style={{ margin: "0 8px" }}>
                {user.displayName || user.email}
              </span>
              <button
                className="btn secondary"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn secondary">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn primary">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
