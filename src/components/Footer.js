import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span role="img" aria-label="pin">📍</span> <strong>KnowNaija</strong>
        </div>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
          <li><Link to="/terms">Terms</Link></li>


        </ul>
      </div>

      <div className="footer-cookie-note">
        <small>
         🍪 Using KnowNaija means accepting our cookies. Read our <Link to="/privacy" style={{ textDecoration: 'underline', whiteSpace: 'nowrap' }}>Privacy Policy</Link>.

        </small>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} KnowNaija. All rights reserved.</small>
      </div>
    </footer>
  );
}
