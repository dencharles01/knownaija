// setAdmin.js   (CommonJS version)
//
// One-off script to add { role: 'admin' } to dencharles01@gmail.com
//
// 1. Place this file and serviceAccountKey.json in your project root
// 2. npm install firebase-admin
// 3. node setAdmin.js
// ---------------------------------------------------------------

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth }            = require('firebase-admin/auth');
const serviceAccount         = require('./serviceAccountKey.json'); // <- key file

// ─── init Admin SDK ───
initializeApp({ credential: cert(serviceAccount) });

const auth  = getAuth();
const email = 'dencharles01@gmail.com'; // <=== change to your email if needed

(async () => {
  try {
    const user = await auth.getUserByEmail(email);

    console.log('Current customClaims for', email, ':', user.customClaims);

    if (user.customClaims?.role === 'admin') {
      console.log('→ Claim already present, nothing to do.');
    } else {
      await auth.setCustomUserClaims(user.uid, { role: 'admin' });
      console.log('✔  role=admin claim set.  Sign out / sign in to refresh token.');
    }
  } catch (err) {
    console.error('Failed:', err.message);
  } finally {
    process.exit();
  }
})();
