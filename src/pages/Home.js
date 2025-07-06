// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../App.css";

/* images */
import history from "../assets/history.jpg";
import culture from "../assets/culture.jpg";
import pop     from "../assets/pop.jpg";
import food    from "../assets/food.jpg";
import igbo    from "../assets/igbo.jpg";
import map     from "../assets/map.jpg";
import sports  from "../assets/sports.jpg";

/* components */
import ForumBadge        from "../components/ForumBadge";
import ForumPromo        from "../components/ForumPromo";
import DailyQuoteSection from "../components/DailyQuoteSection";
import StoriesStrip      from "../components/StoriesStrip/StoriesStrip";

/* Supabase */
import { supabase } from "../supabaseClient";

export default function Home() {
  const nav = useNavigate();

  // User-selected difficulty (default: Easy)
  const [difficulty, setDifficulty] = useState("Easy");

  // Featured quiz categories
  const categories = [
    { name: "History",      image: history },
    { name: "Culture",      image: culture },
    { name: "Pop Culture",  image: pop     },
    { name: "Food",         image: food    },
    { name: "Languages",    image: igbo    },
    { name: "Geography",    image: map     },
    { name: "Naija Sports", image: sports  },
  ];

  // Story state
  const [stories, setStories]        = useState([]);
  const [loadingStories, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("stories")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (!error) setStories(data);
      setLoading(false);
    })();
  }, []);

  const displayStories =
    loadingStories && stories.length === 0
      ? [{
          id: 0,
          title: "Loading stories…",
          author: "",
          tags: [],
          coverImage: "/placeholder_cover.jpg",
        }]
      : stories;

  return (
    <>
      <Helmet>
        <title>KnowNaija - Discover Nigeria</title>
        <meta
          name="description"
          content="Learn about Nigeria's rich culture, history, food, language, and more through engaging quizzes and stories."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="app">
        {/* Floating forum badge */}
        <ForumBadge />

        {/* 🌄 Hero banner */}
        <header className="hero-section">
          <div className="hero-banner">
            <img src="/hero-banner.png" alt="KnowNaija Banner" className="hero-banner-image" />
            <div className="hero-banner-btn">
              <button
                className="start-btn"
                onClick={() => nav("/quiz", { state: { category: null, difficulty } })}
              >
                Start&nbsp;Quiz
              </button>
            </div>
          </div>
        </header>

        {/* 🏠 Forum promo */}
        <div style={{ margin: "56px auto 64px" }}>
          <ForumPromo />
        </div>

        {/* 🇳🇬 Proverb */}
        <div className="proverb-wrapper">
          <DailyQuoteSection />
        </div>

        {/* 📖 Stories */}
        <StoriesStrip stories={displayStories} />

        {/* 📚 Featured categories */}
        <section className="categories">
          <h2 style={{ textAlign: "center" }}>Featured Quiz</h2>

          {/* 🔽 Difficulty Selector */}
          <div style={{ textAlign: "center", marginBottom: "1rem", color: "#116e49" }}>
            <label htmlFor="diff" style={{ marginRight: "0.5rem", color: "#116e49" }}>
              Select Difficulty:
            </label>
            <select
              id="diff"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: 6,
                color: "#116e49",
                border: "1px solid #116e49"
              }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Category cards */}
          <div className="category-grid">
            {categories.map(({ name, image }) => (
              <div
                key={name}
                className="category-card"
                onClick={() =>
                  nav("/quiz", {
                    state: {
                      category: name,
                      difficulty
                    }
                  })
                }
              >
                <img src={image} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
