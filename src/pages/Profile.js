// Profile.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import "./Profile.css";
import maleAvatar from "../assets/avatars/male.png";
import femaleAvatar from "../assets/avatars/female.png";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (cu) => {
      if (cu) {
        setUser(cu);
        const snap = await getDoc(doc(db, "users", cu.uid));
        if (snap.exists()) {
          setProfile(snap.data());
        }
      }
    });
    return unsub;
  }, []);

  if (!user || !profile) return <p>Loading profile...</p>;

  const avatar = profile.avatar === "female" ? femaleAvatar : maleAvatar;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={avatar} alt="avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>{user.displayName || "Anonymous"}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
