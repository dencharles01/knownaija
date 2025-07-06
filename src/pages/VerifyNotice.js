import React, { useState, useEffect } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase';
import './VerifyNotice.css';

export default function VerifyNotice() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleResend = async () => {
    setMessage('');
    setError('');

    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        setMessage("Verification email sent again.");
        setCooldown(60); // disable for 60 seconds
      } catch (err) {
        setError("Error sending verification. Try again later.");
      }
    } else {
      setError("No user is currently signed in.");
    }
  };

  return (
    <div className="verify-box">
      <h2>Email Verification</h2>
      <p>Please check your email inbox and click the link to verify your account.</p>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <button
        onClick={handleResend}
        className="btn primary"
        disabled={cooldown > 0}
      >
        {cooldown > 0 ? `Wait ${cooldown}s` : 'Resend Verification Email'}
      </button>
    </div>
  );
}
