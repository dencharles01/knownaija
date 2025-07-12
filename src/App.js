import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

/* Firebase session check */
import { auth, onAuthStateChanged } from "./firebase";

/* Primary pages */
import Home           from "./pages/Home";
import Quiz           from "./pages/Quiz";
import Result         from "./pages/Result";
import Profile        from "./pages/Profile";
import Leaderboard    from "./pages/Leaderboard";
import About          from "./pages/About";
import Auth           from "./pages/Auth";
import Register       from "./pages/Register";
import VerifyNotice   from "./pages/VerifyNotice";
import ForgotPassword from "./pages/ForgotPassword";
import Disclaimer     from "./pages/Disclaimer";
import Privacy        from "./pages/Privacy";
import Terms          from "./pages/Terms";
import Login from './pages/Login';

/* Stories */
import StoriesPage  from "./pages/StoriesPage";
import StoryPage    from "./pages/StoryPage";
import SubmitStory  from "./pages/SubmitStory";
import AdminStories from "./pages/AdminStories";

/* Radio */
import RadioPage from "./pages/RadioPage";

/* Forum */
import ForumCategories from "./pages/ForumCategories";
import ForumThreads    from "./pages/ForumThreads";
import ForumPost       from "./pages/ForumPost";
import NewThreadForm   from "./pages/NewThreadForm";

/* Shared layout */
import Navbar     from "./components/Navbar";
import Footer     from "./components/Footer";
import RadioBadge from "./components/RadioBadge";

/* Utils */
import ProtectedRoute from "./utils/ProtectedRoute";

// Optional loading component
const Loading = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>Loading...</h2>
  </div>
);

export default function App() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, () => setAuthChecked(true));
    return unsub;
  }, []);

  if (!authChecked) return <Loading />;

  return (
    <>
      <Navbar />
      <RadioBadge />

      <Routes>
        {/* Public routes */}
        <Route path="/"                element={<Home />} />
        <Route path="/about"           element={<About />} />
        <Route path="/auth"            element={<Auth />} />
        <Route path="/radio"           element={<RadioPage />} />
        <Route path="/stories"         element={<StoriesPage />} />
        <Route path="/story/:id"       element={<StoryPage />} />
        <Route path="/verify"          element={<VerifyNotice />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/disclaimer"      element={<Disclaimer />} />
        <Route path="/privacy"         element={<Privacy />} />
        <Route path="/terms"           element={<Terms />} />
        <Route path="/quiz"            element={<Quiz />} /> {/* ✅ PUBLIC */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Forum: Public view, protected post */}
        <Route path="/forums"                     element={<ForumCategories />} />
        <Route path="/forums/:categoryId"         element={<ForumThreads />} />
        <Route path="/forums/thread/:threadId"    element={<ForumPost />} />
        <Route path="/forums/:categoryId/new"     element={<ProtectedRoute><NewThreadForm /></ProtectedRoute>} />

        {/* Protected-only routes */}
        <Route path="/result"         element={<ProtectedRoute><Result /></ProtectedRoute>} />
        <Route path="/profile"        element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/leaderboard"    element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/submit-story"   element={<ProtectedRoute><SubmitStory /></ProtectedRoute>} />
        <Route path="/admin-stories"  element={<ProtectedRoute><AdminStories /></ProtectedRoute>} />
      </Routes>

      <Footer />
    </>
  );
}
