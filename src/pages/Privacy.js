import React from "react";
import "./Privacy.css"; // Optional, for styling

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy & Data Policy</h1>
      <p><strong>Last updated:</strong> July 2025</p>

      <p>
        At <strong>KnowNaija</strong>, your privacy is a top priority. We are committed to protecting your personal information while offering a fun and secure platform to explore Nigerian culture, history, and identity.
      </p>

      <h3>What We Collect</h3>
      <ul>
        <li>Email address (for account login and progress tracking)</li>
        <li>Quiz results and preferences (stored in localStorage or Firebase)</li>
        <li>Forum activity (posts, replies, badges)</li>
        <li>Anonymous usage data (e.g., analytics tools)</li>
      </ul>

      <h3>How We Use Your Data</h3>
      <ul>
        <li>To personalise your experience and track progress</li>
        <li>To moderate user-generated content</li>
        <li>To improve features and app performance</li>
        <li>To send updates (if you opt-in)</li>
      </ul>

      <h3>Third-Party Tools</h3>
      <p>
        We may use services like Firebase, Google Analytics, or SendGrid to operate features like authentication, email, or data storage. These services may collect and process data based on their own privacy terms.
      </p>

      <h3>Cookies & Storage</h3>
      <p>
        We use cookies and localStorage to keep you signed in, save quiz results, and remember your preferences. You can clear cookies at any time through your browser settings.
      </p>

      <h3>Your Rights</h3>
      <p>
        You have the right to request access, correction, or deletion of your data. To do so, or if you have privacy concerns, email us at{" "}
        <a href="mailto:support@knownaija.com">support@knownaija.com</a>.
      </p>
    </div>
  );
};

export default Privacy;
