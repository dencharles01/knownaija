import React from "react";
import "./Disclaimer.css"; // Make sure this file exists in the same folder

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>
      <p><strong>Last updated:</strong> July 2025</p>

      <p>
        The content on <strong>KnowNaija</strong> — including quizzes, forum posts, motivational stories,
        and AI-generated materials — is provided for educational, entertainment, and cultural awareness purposes only.
      </p>

      <h3>Quizzes & Learning Content</h3>
      <p>
        We strive for accuracy in all quiz questions and results, but cannot guarantee complete correctness or
        up-to-date facts at all times. Always verify important information with trusted sources.
      </p>

      <h3>Stories & Community Contributions</h3>
      <p>
        User-submitted stories and forum posts reflect personal opinions and experiences.
        KnowNaija does not endorse or verify all views expressed. We reserve the right to moderate or remove content
        that violates our community guidelines.
      </p>

      <h3>AI-Generated Content</h3>
      <p>
        Some content — including quotes, explanations, and creative writing — may be partially generated using
        artificial intelligence (e.g., ChatGPT). While reviewed for quality, such content may not reflect professional advice.
      </p>

      <h3>No Professional Advice</h3>
      <p>
        The information shared on KnowNaija is not a substitute for legal, medical, financial, or professional advice.
        For such matters, always consult a qualified expert.
      </p>

      <h3>Contact Us</h3>
      <p>
        If you believe any content on the site is inaccurate, misleading, or harmful, please contact us at{" "}
        <a href="mailto:support@knownaija.com">support@knownaija.com</a>.
      </p>
    </div>
  );
};

export default Disclaimer;
