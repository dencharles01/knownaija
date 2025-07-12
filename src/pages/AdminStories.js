import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  auth,
  db,
  storage,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "../firebase";
import { ref, deleteObject } from "firebase/storage";
import "./AdminStories.css";

export default function AdminStories() {
  const nav = useNavigate();
  const [view, setView] = useState("pending");
  const [pending, setPending] = useState([]);
  const [approved, setApproved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);

  // 🔐 Redirect non-admin users away
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return nav("/");

    user.getIdTokenResult().then(token => {
      if (token.claims.role !== "admin") nav("/");
    });
  }, [nav]);

  // 🚀 Load stories
  useEffect(() => {
    (async () => {
      try {
        const pendQuery = query(
          collection(db, "stories"),
          where("status", "==", "pending"),
          orderBy("createdAt", "asc") // ✅ REQUIRES COMPOSITE INDEX
        );
        const apprQuery = query(
          collection(db, "stories"),
          where("status", "==", "approved"),
          orderBy("createdAt", "desc") // ✅ REQUIRES COMPOSITE INDEX
        );

        const [pendSnap, apprSnap] = await Promise.all([
          getDocs(pendQuery),
          getDocs(apprQuery)
        ]);

        setPending(pendSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setApproved(apprSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      } catch (err) {
        console.error("❌ Failed to load stories:", err.message);
        alert("Error loading stories. You may need to create a Firestore index.");
        setLoading(false);
      }
    })();
  }, []);

  // ✅ Approve or Reject
  async function updateStatus(id, status) {
    try {
      const storyRef = doc(db, "stories", id);
      await updateDoc(storyRef, { status });

      setPending(prev => prev.filter(s => s.id !== id));
      if (status === "approved") {
        const moved = pending.find(s => s.id === id);
        if (moved) setApproved(prev => [{ ...moved, status }, ...prev]);
      }
    } catch (err) {
      alert("Update failed: " + err.message);
    }
  }

  // 🗑 Hard delete story (and image)
  async function hardDelete(id, fromApproved = false) {
    if (!window.confirm("Delete this story permanently?")) return;

    const srcArr = fromApproved ? approved : pending;
    const story = srcArr.find(s => s.id === id);

    if (story?.coverImage) {
      const filename = story.coverImage.split("/").pop().split("?")[0];
      const imageRef = ref(storage, `story_covers/${filename}`);
      try {
        await deleteObject(imageRef);
      } catch (err) {
        console.warn("⚠️ Image delete skipped or failed:", err.message);
      }
    }

    try {
      await deleteDoc(doc(db, "stories", id));
      if (fromApproved) setApproved(prev => prev.filter(s => s.id !== id));
      else setPending(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
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
