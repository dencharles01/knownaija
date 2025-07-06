import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';   //  npm i react-icons

import './ThemeToggle.css';    // optional, see snippet below

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle colour scheme"
      onClick={toggleTheme}
      className="theme-toggle-btn"
    >
      {theme === 'light' ? <BsMoonFill /> : <BsSunFill />}
    </button>
  );
}
