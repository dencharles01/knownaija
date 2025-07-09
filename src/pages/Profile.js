// ───────────────────────────────────────────────
// src/pages/Profile.js
//   Simple profile screen (name + avatar + email)
// ───────────────────────────────────────────────
import React, { useEffect, useState } from "react";

/* Firebase helpers we still rely on */
import {
  auth,
  db,
  onAuthStateChanged,
  doc,
  getDoc,
} from "../firebase";

import "./Profile.css";
import maleAvatar   from "../assets/avatars/male.png";
import femaleAvatar from "../assets/avatars/female.png";

export default function Profile() {
  const [firebaseUser, setFirebaseUser] = useState(null); // auth object
  const [profileDoc,   setProfileDoc]   = useState(null); // Firestore data

  /* ───── load once when component mounts ───── */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (cu) => {
      if (cu) {
        setFirebaseUser(cu);

        // look up extra profile data (avatar, etc.)
        const snap = await getDoc(doc(db, "users", cu.uid));
        if (snap.exists()) setProfileDoc(snap.data());
      } else {
        setFirebaseUser(null);
        setProfileDoc(null);
      }
    });

    return unsubscribe;                       // cleanup
  }, []);

  /* still loading? */
  if (!firebaseUser || !profileDoc) {
    return <p style={{ textAlign: "center" }}>Loading profile…</p>;
  }

  /* choose avatar */
  const avatarSrc =
    profileDoc.avatar === "female" ? femaleAvatar : maleAvatar;

  /* ───── render ───── */
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={avatarSrc} alt="avatar" className="profile-avatar" />

        <div className="profile-info">
          <h2>{firebaseUser.displayName || "Anonymous"}</h2>
          <p>{firebaseUser.email}</p>
        </div>
      </div>
    </div>
  );
}
