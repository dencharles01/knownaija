// src/contexts/ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeCtx = createContext();

/**
 * <ThemeProvider>
 *  – keeps the current colour-scheme in React state
 *  – persists the choice in localStorage
 *  – writes data-theme="light | dark" on <html> so CSS vars kick in
 *
 * Wrap <App/> with this provider (already done in src/index.js).
 */
export function ThemeProvider({ children }) {
  /* ------------------------------------------------------------
     step 1: decide the initial theme
            ->  localStorage  →  system preference  →  'light'
  ------------------------------------------------------------ */
  const getInitial = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;

    // ‘prefers-color-scheme’ *might* not exist on very old browsers.
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches)
      return 'dark';

    return 'light';
  };

  const [theme, setTheme] = useState(getInitial);

  /* ------------------------------------------------------------
     step 2: whenever theme changes
            – persist
            – update <html data-theme="…">
  ------------------------------------------------------------ */
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /* ------------------------------------------------------------
     handy toggle fn
  ------------------------------------------------------------ */
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  /* ------------------------------------------------------------
     provider
  ------------------------------------------------------------ */
  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

/* simple hook so components can consume it easily */
export const useTheme = () => useContext(ThemeCtx);
