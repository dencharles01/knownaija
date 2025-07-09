// ──────────────────────────────────────────────
// src/firebase.js
// ──────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  // Optional legacy email/password methods if needed later
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

// ▸ 1. Firebase Project Config (from console)
const firebaseConfig = {
  apiKey:            "AIzaSyAWzcwwae4pHHg8JYXyFa-6KmVMBtrJBM0",
  authDomain:        "knownaijaapp.firebaseapp.com",
  projectId:         "knownaijaapp",
  storageBucket:     "knownaijaapp.appspot.com",
  messagingSenderId: "1001997550324",
  appId:             "1:1001997550324:web:e3b2bb08f0c077e59e94a1",
};

// ▸ 2. Init Firebase
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// ▸ 3. Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// ▸ 4. Export for use throughout your app
export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,     // optional
  createUserWithEmailAndPassword, // optional
  sendEmailVerification,          // optional
  sendPasswordResetEmail,         // optional
  updateProfile,                  // optional

  // Firestore tools
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
};
