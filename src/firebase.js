// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage }    from 'firebase/storage';

/* ─── Firebase project configuration ───
   (In production, swap these out for environment variables) */
const firebaseConfig = {
  apiKey:            'AIzaSyAWzcwwae4pHHg8JYXyFa-6KmVMBtrJBM0',
  authDomain:        'knownaijaapp.firebaseapp.com',
  projectId:         'knownaijaapp',
  storageBucket:     'knownaijaapp.appspot.com',
  messagingSenderId: '1001997550324',
  appId:             '1:1001997550324:web:e3b2bb08f0c077e59e94a1',
};

/* ─── Initialise core SDK ─── */
const app = initializeApp(firebaseConfig);

/* ─── Individual services ─── */
const db              = getFirestore(app);
const auth            = getAuth(app);
const storage         = getStorage(app);
const googleProvider  = new GoogleAuthProvider();

/* ─── Dev-only helper: expose `auth` in the browser console ─── */
if (process.env.NODE_ENV === 'development') {
  // Now in DevTools you can do: auth.currentUser.getIdToken(...)
  window.auth = auth;
}

/* ─── Exports ─── */
export { app, db, auth, storage, googleProvider };
