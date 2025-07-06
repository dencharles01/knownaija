// src/components/MiniBar.js
import { useRadio } from "../contexts/RadioContext";
import "./MiniBar.css";

export default function MiniBar() {
  const { track, playing, toggle } = useRadio();

  if (!track) return null;   // playlist still loading

  return (
    <div className="mini-bar">
      <span className="mini-title">{track.title}</span>
      <button className="mini-btn" onClick={toggle}>
        {playing ? "⏸" : "▶"}
      </button>
    </div>
  );
}
