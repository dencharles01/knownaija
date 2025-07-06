/* ForumBadge.js
   Floating badge that links to /forums
   – square 64 px on both mobile and desktop
   – bottom-left on mobile; random corner on desktop (moves every 25 s)
*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import badgeImg from "../assets/naijatalk.png";     // your image

const DESKTOP_MIN = 769;
const SIZE_MOBILE = 64;
const SIZE_DESK   = 64;    // now matches Radio badge
const INTERVAL    = 25_000; // 25 s

export default function ForumBadge() {
  const nav = useNavigate();
  const [pos, setPos] = useState({ bottom: "1.2rem", right: "1.2rem" });

  /* ---------- choose a random corner (desktop only) ---------- */
  useEffect(() => {
    function pickCorner() {
      const corner = Math.floor(Math.random() * 4); // 0-3
      const o = "1.2rem";
      return {
        top:    corner === 0 ? o : "auto",
        right:  corner === 1 ? o : (corner === 0 ? o : "auto"),
        bottom: corner === 2 ? o : (corner === 3 ? o : "auto"),
        left:   corner === 3 ? o : "auto",
      };
    }

    if (window.innerWidth >= DESKTOP_MIN) {
      setPos(pickCorner());                 // first position
      const id = setInterval(() => setPos(pickCorner()), INTERVAL);
      return () => clearInterval(id);
    }
  }, []);

  /* ---------- sizing & positioning ---------- */
  const isDesktop = window.innerWidth >= DESKTOP_MIN;
  const size      = isDesktop ? SIZE_DESK : SIZE_MOBILE;
  const style     = {
    width:  size,
    height: size,
    position: "fixed",
    zIndex: 998,
    cursor: "pointer",
    borderRadius: 8,                       // square with slight rounding
    boxShadow: "0 4px 12px rgba(0,0,0,.25)",
    transition: "transform .15s",
    background: `url(${badgeImg}) center/cover no-repeat`,
    bottom: isDesktop ? pos.bottom : "1.2rem",  // mobile = bottom-left
    left:   isDesktop ? pos.left   : "1.2rem",
    right:  isDesktop ? pos.right  : "auto",
    top:    isDesktop ? pos.top    : "auto",
  };

  return (
    <div
      style={style}
      onClick={() => nav("/forums")}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1.0)")}
      aria-label="Open forums"
    />
  );
}
