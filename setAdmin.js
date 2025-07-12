// setAdmin.js   (CommonJS version)
//
// One-off script to add { role: 'admin' } to dencharles01@gmail.com
//
// 1. Place this file and serviceAccountKey.json in your project root
// 2. Run: npm install firebase-admin
// 3. Run: node setAdmin.js
// ---------------------------------------------------------------

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const serviceAccount = require('./serviceAccountKey.json'); // <- make sure this file is valid

// ─── Initialise Admin SDK ───
initializeApp({ credential: cert(serviceAccount) });

// ─── Target email to make admin ───
const email = 'dencharles01@gmail.com'; // ✅ change here if needed later

(async () => {
  try {
    const auth = getAuth();
    const user = await auth.getUserByEmail(email);

    console.log('🔎 Found user:', user.uid);
    console.log('Current customClaims for', email, ':', user.customClaims);

    if (user.customClaims?.role === 'admin') {
      console.log('✅ Already has role=admin. No action needed.');
    } else {
      await auth.setCustomUserClaims(user.uid, { role: 'admin' });
      console.log('🎉 Success: role=admin claim has been set.');
      console.log('ℹ️  You must sign out and sign back in for it to apply.');
    }
  } catch (err) {
    console.error('❌ Failed to set admin role:', err.message);
  } finally {
    process.exit();
  }
})();
