// src/pages/AdminStories.js
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { supabase } from "../supabaseClient";
import "./AdminStories.css"; // keeps the old styles

const ADMIN_EMAIL = "dencharles01@gmail.com";

export default function AdminStories() {
  const nav = useNavigate();

  const [view, setView] = useState("pending");
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user || user.email !== ADMIN_EMAIL) nav("/");
  }, [nav]);

  useEffect(() => {
    (async () => {
      const { data: pend } = await supabase
        .from("stories")
        .select("*")
        .eq("status", "pending")
        .order("created_at", { ascending: true });

      const { data: appr } = await supabase
        .from("stories")
        .select("*")
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      setPending(pend || []);
      setApproved(appr || []);
      setLoading(false);
    })();
  }, []);

  async function updateStatus(id, status) {
    const { error } = await supabase.from("stories").update({ status }).eq("id", id);
    if (error) return alert(error.message);

    setPending(p => p.filter(s => s.id !== id));
    if (status === "approved") {
      const moved = pending.find(s => s.id === id);
      if (moved) setApproved(a => [{ ...moved, status }, ...a]);
    }
  }

  async function hardDelete(id, fromApproved = false) {
    if (!window.confirm("Delete this story permanently?")) return;

    const srcArr = fromApproved ? approved : pending;
    const story = srcArr.find(s => s.id === id);
    if (story?.coverImage) {
      const filename = story.coverImage.split("/").pop();
      await supabase.storage.from("story-covers").remove([filename]);
    }

    const { error } = await supabase.from("stories").delete().eq("id", id);
    if (error) return alert("Delete failed: " + error.message);

    if (fromApproved) setApproved(a => a.filter(s => s.id !== id));
    else setPending(p => p.filter(s => s.id !== id));
  }

  const list = view === "pending" ? pending : approved;
  const header = view === "pending" ? "Pending Stories" : "Approved Stories";

  if (loading) return <p style={{ padding: "2rem" }}>Loading…</p>;

  return (
    <main className="admin-wrap">
      <div className="view-toggle">
        <button className={view === "pending" ? "active" : ""} onClick={() => setView("pending")}>
          Pending ({pending.length})
        </button>
        <button className={view === "approved" ? "active" : ""} onClick={() => setView("approved")}>
          Approved ({approved.length})
        </button>
      </div>

      <h2>{header}</h2>
      {list.length === 0 && <p>No stories in this list.</p>}

      {list.map(s => (
        <div key={s.id} className="story-card">
          <h3>{s.title}</h3>
          <p className="meta">
            by <strong>{s.author}</strong> &middot; {s.tags.join(", ")}
          </p>

          <p className="excerpt">
            {s.body.slice(0, 160)}…{" "}
            <button className="link-btn preview-btn" onClick={() => setPreview(s)}>
              Preview
            </button>
          </p>

          {view === "pending" ? (
            <>
              <button onClick={() => updateStatus(s.id, "approved")}>Approve</button>
              <button onClick={() => updateStatus(s.id, "rejected")}>Reject</button>
            </>
          ) : (
            <button style={{ color: "crimson" }} onClick={() => hardDelete(s.id, true)}>
              Delete
            </button>
          )}
        </div>
      ))}

      {preview && <PreviewModal story={preview} onClose={() => setPreview(null)} />}
    </main>
  );
}

function PreviewModal({ story, onClose }) {
  return createPortal(
    <div className="modal-back" onClick={onClose}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>
          ✕
        </button>
        {story.coverImage && <img src={story.coverImage} alt="cover" className="cover" />}
        <h2>{story.title}</h2>
        <p className="meta">
          by <strong>{story.author}</strong> &middot; {story.tags.join(", ")}
        </p>
        <pre className="full">{story.body}</pre>
      </div>
    </div>,
    document.body
  );
}
