// src/components/StorySubmitForm.js

import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import "./StorySubmitForm.css";

const MAX_MB    = 2;
const MAX_BYTES = MAX_MB * 1_048_576;

export default function StorySubmitForm() {
  const [title,  setTitle]  = useState("");
  const [author, setAuthor] = useState("");
  const [tags,   setTags]   = useState("");
  const [body,   setBody]   = useState("");
  const [cover,  setCover]  = useState(null);
  const [msg,    setMsg]    = useState("");
  const [user,   setUser]   = useState(null);

  // Keep track of current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => setUser(u));
    return unsubscribe;
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    if (!user) {
      setMsg("You must be logged in to submit a story.");
      return;
    }

    if (cover && cover.size > MAX_BYTES) {
      setMsg(`Image is too large. Max ${MAX_MB} MB.`);
      return;
    }

    try {
      let coverUrl = "";

      // ─── UPLOAD COVER IMAGE ─────────────────────
      if (cover) {
        const fileName = `${Date.now()}-${cover.name}`;
        const imageRef = ref(storage, `story_covers/${fileName}`);

        try {
          console.log(`⏳ Uploading cover "${cover.name}" (${cover.size} bytes)…`);
          const snapshot = await uploadBytes(imageRef, cover, {
            contentType: cover.type,
          });
          console.log("✅ uploadBytes snapshot:", snapshot);

          coverUrl = await getDownloadURL(snapshot.ref);
          console.log("🔗 getDownloadURL:", coverUrl);
        } catch (uploadErr) {
          console.error("🚨 Storage upload failed:", uploadErr);
          setMsg("Cover upload failed: " + uploadErr.message);
          return;
        }
      }

      // ─── WRITE STORY TO FIRESTORE ───────────────
      const storyData = {
        title,
        author,
        tags: tags
          .split(",")
          .map(t => t.trim())
          .filter(Boolean),
        body,
        coverImage: coverUrl,
        status: "pending",
        owner_id: user.uid,
        createdAt: serverTimestamp(),
      };

      console.log("⏳ Adding story document:", storyData);
      await addDoc(collection(db, "stories"), storyData);
      console.log("✅ Story successfully written!");

      setMsg("Submitted! Awaiting approval.");
      // reset form
      setTitle("");
      setAuthor("");
      setTags("");
      setBody("");
      setCover(null);
    } catch (err) {
      console.error("🚨 Submission failed:", err);
      setMsg("Submission failed: " + err.message);
    }
  }

  return (
    <form className="story-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Story title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={e => setTags(e.target.value)}
      />

      <textarea
        rows={8}
        placeholder="Write your story here…"
        value={body}
        onChange={e => setBody(e.target.value)}
        required
      />

      <label className="file-label">
        Cover image (optional)&nbsp;
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={e => setCover(e.target.files[0] || null)}
        />
        <span className="hint">PNG / JPG • max {MAX_MB} MB</span>
      </label>

      <button disabled={!title || !author || !body}>
        Submit Story
      </button>

      {msg && <p className="status-msg">{msg}</p>}
    </form>
  );
}
