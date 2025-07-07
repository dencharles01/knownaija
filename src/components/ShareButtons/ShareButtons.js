import React from "react";
import "./ShareButtons.css";  // ✅ ensure styles are applied

/**
 * ShareButtons – renders WhatsApp + Facebook share buttons
 *
 * @param {string} url  – full link to share (e.g. window.location.href)
 * @param {string} text – short caption or summary
 */
function ShareButtons({ url, text }) {
  // Encode URL and text for sharing
  const encodedURL  = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${text} ${url}`);

  // Define share links for WhatsApp and Facebook
  const links = [
    {
      href: `https://wa.me/?text=${encodedText}`,
      label: "WhatsApp",
      className: "wa-btn"
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`,
      label: "Facebook",
      className: "fb-btn"
    }
  ];

  // Render the buttons inside a styled container
  return React.createElement(
    "div",
    { className: "share-buttons" },
    links.map(link =>
      React.createElement(
        "a",
        {
          key: link.label,
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: `share-btn ${link.className}`,
          "aria-label": `Share on ${link.label}`
        },
        link.label
      )
    )
  );
}

export default ShareButtons;
