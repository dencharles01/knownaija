import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SubmitStory() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      let coverImage = "";

      // Upload image and get public download URL
      if (file) {
        const filename = Date.now() + "_" + file.name;
        const filePath = `story_covers/${filename}`;
        const imageRef = ref(storage, filePath);

        // Upload image
        await uploadBytes(imageRef, file);

        // Get download URL
        coverImage = await getDownloadURL(imageRef);
      }

      // Save story to Firestore
      await addDoc(collection(db, "stories"), {
        title,
        author,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        body,
        coverImage,
        status: "pending",
        owner_id: auth.currentUser?.uid || "anonymous",
        createdAt: serverTimestamp(),
      });

      // Reset form
      setTitle("");
      setAuthor("");
      setTags("");
      setBody("");
      setFile(null);
      setMessage("✅ Submitted! Awaiting approval.");
    } catch (err) {
      console.error("❌ Submission error:", err.message);
      setMessage("❌ Submission failed.");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ textAlign: "center" }}>Submit a Story</h2>

      <input type="text" placeholder="Story title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />

      <textarea
        placeholder="Write your story here…"
        rows={8}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        style={{ resize: "vertical" }}
      />

      <label style={{ fontSize: "0.9rem" }}>
        Cover image (optional)
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginTop: "0.3rem" }}
        />
        <span style={{ fontSize: "0.75rem", marginLeft: "0.5rem", color: "#555" }}>
          PNG / JPG • max 2 MB
        </span>
      </label>

      <button type="submit" disabled={!title || !author || !body} style={submitButtonStyle}>
        Submit Story
      </button>

      {message && (
        <p style={{ fontWeight: "bold", marginTop: "0.5rem", color: message.includes("❌") ? "crimson" : "green" }}>
          {message}
        </p>
      )}
    </form>
  );
}

// Style objects
const formStyle = {
  maxWidth: "600px",
  margin: "2rem auto",
  padding: "2rem",
  background: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const submitButtonStyle = {
  padding: "0.65rem",
  background: "#047c3f",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
};
