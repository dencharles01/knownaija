import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from 'firebase/firestore';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable
} from 'firebase/storage';
import { db, auth, storage } from '../firebase';
import './NewThreadForm.css';

export default function NewThreadForm() {
  const { categoryId } = useParams();
  const nav = useNavigate();
  const { state } = useLocation();

  const initialName = state?.catName || '';
  const [catName, setCatName] = useState(initialName);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialName) return;
    (async () => {
      const snap = await getDoc(doc(db, 'forumCategories', categoryId));
      if (snap.exists()) setCatName(snap.data().title);
    })();
  }, [categoryId, initialName]);

  function validateImage(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!validTypes.includes(file.type)) {
      return 'Only JPG, PNG, GIF, or WEBP images are allowed.';
    }
    if (file.size > maxSize) {
      return 'Image too large. Max 5MB allowed.';
    }
    return null;
  }

  function validate() {
    if (!title.trim() || !body.trim()) {
      setError('Title and body are required.');
      return false;
    }
    if (title.length > 120) {
      setError('Title must be under 120 characters.');
      return false;
    }
    return true;
  }

  async function handleImageUpload(file) {
    return new Promise((resolve, reject) => {
      const filename = `${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `threadImages/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        null,
        err => reject(err),
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    const user = auth.currentUser;
    if (!user) {
      setError('You must be logged in to post.');
      return;
    }

    try {
      setSaving(true);
      let uploadedURL = '';

      if (imageFile) {
        setUploading(true);
        uploadedURL = await handleImageUpload(imageFile);
        setUploading(false);
      }

      const ref = await addDoc(collection(db, 'forumThreads'), {
        categoryId,
        title: title.trim(),
        body: body.trim(),
        createdBy: user.displayName || user.email.split('@')[0],
        uid: user.uid,
        createdAt: serverTimestamp(),
        commentCount: 0,
        score: 0,
        thumbnail: uploadedURL || '',
      });

      try {
        await updateDoc(doc(db, 'forumCategories', categoryId), {
          threadCount: increment(1),
        });
      } catch (err) {
        console.warn('[threadCount] update skipped:', err.code || err.message);
      }

      nav(`/forums/thread/${ref.id}`);
    } catch (err) {
      console.error(err);
      setError('Failed to save thread. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const validationError = validateImage(file);
    if (validationError) {
      setError(validationError);
      e.target.value = null;
      setImageFile(null);
    } else {
      setError('');
      setImageFile(file);
    }
  }

  return (
    <section className="new-thread-page">
      <h1>
        Create Post in <span>{catName || 'Forum'}</span>
      </h1>

      <form onSubmit={handleSubmit} className="thread-form">
        {error && <p className="form-error">{error}</p>}

        <label>
          Title
          <input
            type="text"
            maxLength={120}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </label>

        <label>
          Body
          <textarea
            rows={8}
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Enter body"
            required
          />
        </label>

        <label>
          Optional Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        {uploading && <p>Uploading image…</p>}

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => nav(-1)}
            disabled={saving}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="submit-btn"
            disabled={saving}
          >
            {saving ? 'Posting…' : 'Submit Post'}
          </button>
        </div>
      </form>
    </section>
  );
}
