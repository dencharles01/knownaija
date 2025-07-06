// src/App.js
// Root routing config (React Router v6) for KnowNaija

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

/* ── primary pages ─ */
import Home            from "./pages/Home";
import Quiz            from "./pages/Quiz";
import Result          from "./pages/Result";
import Profile         from "./pages/Profile";
import Leaderboard     from "./pages/Leaderboard";
import About           from "./pages/About";
import Auth            from "./pages/Auth";
import Register        from "./pages/Register";
import VerifyNotice    from "./pages/VerifyNotice";
import ForgotPassword  from "./pages/ForgotPassword";
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';





/* ── stories ─ */
import StoriesPage   from "./pages/StoriesPage";
import StoryPage     from "./pages/StoryPage";
import SubmitStory   from "./pages/SubmitStory";
import AdminStories  from "./pages/AdminStories";

/* ── radio ─ */
import RadioPage     from "./pages/RadioPage";

/* ── forum ─ */
import ForumCategories from "./pages/ForumCategories";
import ForumThreads    from "./pages/ForumThreads";
import ForumPost       from "./pages/ForumPost";
import NewThreadForm   from "./pages/NewThreadForm";

/* ── layout ─ */
import Navbar     from "./components/Navbar";
import Footer     from "./components/Footer";
import RadioBadge from "./components/RadioBadge";

/* ── access control ─ */
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [authChecked, setAuthChecked] = useState(false);

  /* wait for Firebase before rendering routes */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, () => setAuthChecked(true));
    return () => unsub();
  }, []);

  if (!authChecked) return null;

  return (
    <>
      <Navbar />
      <RadioBadge />

      <Routes>
        {/* public routes */}
        <Route path="/"                element={<Home />} />
        <Route path="/about"           element={<About />} />
        <Route path="/auth"            element={<Auth />} />
        <Route path="/register"        element={<Register />} />
        <Route path="/radio"           element={<RadioPage />} />
        <Route path="/stories"         element={<StoriesPage />} />
        <Route path="/story/:id"       element={<StoryPage />} />
        <Route path="/verify"          element={<VerifyNotice />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />




        {/* protected core */}
        <Route path="/quiz"        element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/result"      element={<ProtectedRoute><Result /></ProtectedRoute>} />
        <Route path="/profile"     element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />

        {/* protected stories */}
        <Route path="/submit-story"  element={<ProtectedRoute><SubmitStory /></ProtectedRoute>} />
        <Route path="/admin-stories" element={<ProtectedRoute><AdminStories /></ProtectedRoute>} />

        {/* protected forum */}
        <Route path="/forums"                      element={<ProtectedRoute><ForumCategories /></ProtectedRoute>} />
        <Route path="/forums/:categoryId"          element={<ProtectedRoute><ForumThreads /></ProtectedRoute>} />
        <Route path="/forums/:categoryId/new"      element={<ProtectedRoute><NewThreadForm /></ProtectedRoute>} />
        <Route path="/forums/thread/:threadId"     element={<ProtectedRoute><ForumPost /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
