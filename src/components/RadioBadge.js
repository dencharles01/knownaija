import { useRadio } from "../contexts/RadioContext";
import { Link }     from "react-router-dom";
import badgeImg     from "../assets/247radio.jpg";   // ← your uploaded image
import "./RadioBadge.css";

export default function RadioBadge() {
  // show only when playlist is ready (optional)
  const { track } = useRadio();
  if (!track) return null;

  return (
    <Link to="/radio" className="radio-badge" title="Open KnowNaija Radio">
      <img src={badgeImg} alt="KnowNaija Radio" />
    </Link>
  );
}
