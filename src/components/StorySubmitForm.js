// src/components/StorySubmitForm.js
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import './StorySubmitForm.css';

const MAX_MB    = 2;
const MAX_BYTES = MAX_MB * 1_048_576;

export default function StorySubmitForm() {
  const [title,  setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [tags,   setTags] = useState('');
  const [body,   setBody] = useState('');
  const [cover,  setCover] = useState(null);
  const [msg,    setMsg]   = useState('');

  /* ───────────────────────── submit ───────────────────────── */
  async function handleSubmit(e) {
    e.preventDefault();
    setMsg('');

    /* size check */
    if (cover && cover.size > MAX_BYTES) {
      setMsg(`Image is too large. Max ${MAX_MB} MB.`);
      return;
    }

    /* 🟢 1. grab session then user */
    const { data: { session }, error: sesErr } =
      await supabase.auth.getSession();

    if (sesErr || !session?.user) {
      console.error('session error', sesErr);
      setMsg('You must be logged in to submit a story.');
      return;              // ← still prevents insert if not signed‑in
    }

    const user = session.user;          // ✅ guaranteed
    const userId = user.id;             // uuid we need for owner_id

    /* upload cover (optional) */
    let coverUrl = '';
    if (cover) {
      const fileName = `${Date.now()}-${cover.name}`;
      const { error: uploadErr } = await supabase
        .storage.from('story-covers')
        .upload(fileName, cover);

      if (uploadErr) {
        console.error(uploadErr);
        setMsg('Cover upload failed. Try again.');
        return;
      }

      coverUrl = supabase
        .storage.from('story-covers')
        .getPublicUrl(fileName).data.publicUrl;
    }

    /* 🟢 2. insert row including owner_id */
    const { error } = await supabase.from('stories').insert([{
      title,
      author,
      body,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      coverImage: coverUrl,
      status: 'pending',
      owner_id: userId          // ← satisfies RLS
    }]);

    if (error) {
      console.error('insert error', error);
      setMsg(`Submission failed: ${error.message}`);
      return;
    }

    setMsg('Submitted! Awaiting approval.');
    setTitle(''); setAuthor(''); setTags(''); setBody(''); setCover(null);
  }
  /* ─────────────────────────────────────────────────────────── */

  return (
    <form className="story-form" onSubmit={handleSubmit}>
      <input  value={title}  onChange={e=>setTitle(e.target.value)}
              placeholder="Story title" required />
      <input  value={author} onChange={e=>setAuthor(e.target.value)}
              placeholder="Author name" required />
      <input  value={tags}   onChange={e=>setTags(e.target.value)}
              placeholder="Tags (comma separated)" />
      <textarea rows={8} value={body}
                onChange={e=>setBody(e.target.value)}
                placeholder="Write your story here…" required />

      <label className="file-label">
        Cover image (optional)&nbsp;
        <input type="file" accept="image/png, image/jpeg"
               onChange={e => setCover(e.target.files[0])} />
        <span className="hint">PNG / JPG • max {MAX_MB} MB</span>
      </label>

      <button disabled={!title || !author || !body}>Submit Story</button>
      {msg && <p className="status-msg">{msg}</p>}
    </form>
  );
}
