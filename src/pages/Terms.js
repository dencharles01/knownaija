import React from "react";
import "./Terms.css"; // optional

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Use</h1>
      <p><strong>Last updated:</strong> July 2025</p>

      <p>
        Welcome to <strong>KnowNaija</strong>! By using this app, you agree to follow these simple rules. Our goal is to keep the space fun, safe, and respectful for everyone.
      </p>

      <h3>Using the App</h3>
      <ul>
        <li>You must be 13+ to use KnowNaija.</li>
        <li>Don’t misuse or spam the platform.</li>
        <li>Respect other users, especially in comments and forums.</li>
        <li>Only post content that you created or have the right to share.</li>
      </ul>

      <h3>Content Ownership</h3>
      <p>
        You own the content you create, but by posting on KnowNaija, you give us permission to display and share it within the app and on our socials (with credit).
      </p>

      <h3>Account Suspension</h3>
      <p>
        We can suspend or delete accounts that break our rules, including hate speech, trolling, or uploading illegal content.
      </p>

      <h3>Changes to the Terms</h3>
      <p>
        These terms may change over time. We’ll notify you of major updates through the app.
      </p>

      <h3>Contact</h3>
      <p>
        If you have questions or concerns, email us at{" "}
        <a href="mailto:support@knownaija.com">support@knownaija.com</a>.
      </p>
    </div>
  );
};

export default Terms;
