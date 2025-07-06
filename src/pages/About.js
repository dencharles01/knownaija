import React from "react";
import "./About.css"; // optional: create custom styling here

const About = () => {
  return (
    <div className="about-container">
      <h1>About KnowNaija</h1>
      <p>
        <strong>KnowNaija</strong> is a youth-powered platform dedicated to
        celebrating and preserving Nigerian history, culture, identity, and
        creativity.
      </p>
      <p>
        Through interactive quizzes, motivational content, Gen Z-inspired
        stories, and a growing forum community, we aim to spark curiosity,
        boost confidence, and build a stronger sense of national pride — one
        click at a time.
      </p>
      <p>
        Whether you're here to test your knowledge, share your story, learn
        something new, or just vibe with others, KnowNaija is your digital home.
      </p>
      <ul>
        <li>🧠 Learn.</li>
        <li>🔥 Compete.</li>
        <li>💬 Connect.</li>
          <li>🎵 Vibe to Music.</li>
        <li>
    <span role="img" aria-label="Nigerian Flag">
      <span style={{ background: "linear-gradient(to right, green 33%, white 34%, white 66%, green 67%)", display: "inline-block", width: "1.5em", height: "1em", verticalAlign: "middle", border: "1px solid #ccc", marginRight: "0.4em" }}></span>
    </span>
    Be proudly Naija.
  </li>
      </ul>
    </div>
  );
};

export default About;
