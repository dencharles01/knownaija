// src/components/StorySubmitForm.js
import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./StorySubmitForm.css";

const MAX_MB    = 2;
const MAX_BYTES = MAX_MB * 1_048_576; // 1 MB = 1,048,576 bytes

export default function StorySubmitForm() {
  const [title,  setTitle]  = useState("");
  const [author, setAuthor] = useState("");
  const [tags,   setTags]   = useState("");
  const [body,   setBody]   = useState("");
  const [cover,  setCover]  = useState(null);
  const [msg,    setMsg]    = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");

    /* ───────── validate optional cover size ───────── */
    if (cover && cover.size > MAX_BYTES) {
      setMsg(
        `Image is too large (${(cover.size / 1_048_576).toFixed(1)} MB). ` +
        `Max allowed is ${MAX_MB} MB.`
      );
      return;
    }

    /* ───────── upload cover (if present) ───────── */
    let coverUrl = "";
    if (cover) {
      const fileName = `${Date.now()}-${cover.name}`;
      const { error: upErr } = await supabase
        .storage
        .from("story-covers")
        .upload(fileName, cover);

      if (upErr) {
        console.error("Cover upload error:", upErr);
        setMsg("Cover upload failed. Please try again.");
        return;
      }

      coverUrl = supabase
        .storage
        .from("story-covers")
        .getPublicUrl(fileName).data.publicUrl;
    }

    /* ───────── write row to stories table ───────── */
    const { error } = await supabase.from("stories").insert({
      title,
      author,
      body,
      tags: tags
        .split(",")
        .map(t => t.trim())
        .filter(Boolean),   // remove empty strings
      coverImage: coverUrl, // <-- matches DB column
      status: "pending"
    });

    if (error) {
      console.error("Insert failed:", error);
      setMsg(`Submission failed: ${error.message}`);
      return;
    }

    /* ───────── success → reset form ───────── */
    setMsg("Submitted! Awaiting approval.");
    setTitle(""); setAuthor(""); setTags(""); setBody(""); setCover(null);
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
        placeholder="Write your story here…"
        rows={10}
        value={body}
        onChange={e => setBody(e.target.value)}
        required
      />

      {/* ───────── cover upload ───────── */}
      <label className="file-label">
        Cover image (optional)&nbsp;
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={e => setCover(e.target.files[0])}
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
