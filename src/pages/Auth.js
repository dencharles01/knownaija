import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup
} from 'firebase/auth';

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLoginMode) {
        const { user } = await signInWithEmailAndPassword(auth, email, password);

        if (!user.emailVerified) {
          setError("Please verify your email before logging in.");
          return;
        }

        navigate('/');
      } else {
        if (email.endsWith('@example.com') || email.endsWith('@test.com')) {
          setError("Please use a valid personal email address.");
          return;
        }

        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(user);
        alert("Account created. A verification email has been sent. Please verify your email before logging in.");
        setIsLoginMode(true); // switch to login after signup
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      console.error("Google login error:", err);
      setError("Google login failed. Please try again or use email login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>{isLoginMode ? 'Login' : 'Register'}</h2>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Forgot password link (only in login mode) */}
        {isLoginMode && (
          <p style={{ textAlign: 'right', fontSize: '0.9rem' }}>
            <a href="/forgot-password" style={{ color: '#007bff' }}>
              Forgot Password?
            </a>
          </p>
        )}

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Please wait...' : isLoginMode ? 'Login' : 'Create Account'}
        </button>
      </form>

      <button onClick={handleGoogleLogin} style={googleButtonStyle} disabled={loading}>
        Sign in with Google
      </button>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{' '}
        <span
          onClick={() => setIsLoginMode(!isLoginMode)}
          style={{ color: '#007bff', cursor: 'pointer' }}
        >
          {isLoginMode ? 'Register here' : 'Login here'}
        </span>
      </p>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: '2rem auto',
  padding: '2rem',
  border: '1px solid #ccc',
  borderRadius: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  margin: '0.5rem 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#008751',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '1rem',
};

const googleButtonStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '1rem',
};
