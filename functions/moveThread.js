/**
 * POST  https://<region>-<project>.cloudfunctions.net/moveThread
 * Body: { threadId: "…", newCategoryId: "…" }
 * Auth: Bearer <ID-token with  { role: "admin" }>
 */

const admin = require("firebase-admin");

// Initialise the Admin SDK exactly once
if (admin.apps.length === 0) admin.initializeApp();

const db = admin.firestore();

module.exports = async (req, res) => {
  /* ════════════════════ 1. AUTH ═════════════════ */
  const authHeader = req.headers.authorization || "";
  const idToken    = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : "";

  let decoded;
  try {
    decoded = await admin.auth().verifyIdToken(idToken);
    if (decoded.role !== "admin") {
      return res.status(403).send("Not an admin");
    }
  } catch (err) {
    return res.status(401).send("Invalid or missing token");
  }

  /* ═══════════════ 2. VALIDATE INPUT ═════════════ */
  const { threadId, newCategoryId } = req.body || {};
  if (!threadId || !newCategoryId) {
    return res.status(400).send("threadId & newCategoryId required");
  }

  try {
    /* ════════════════ 3. FETCH THREAD ═════════════ */
    const threadRef = db.collection("forumThreads").doc(threadId);
    const snap      = await threadRef.get();
    if (!snap.exists) return res.status(404).send("Thread not found");

    const oldData       = snap.data();
    const oldCategoryId = oldData.categoryId;

    /* ══════════ 4. RUN A BATCH UPDATE ═════════════ */
    const batch = db.batch();

    // a) move the thread
    batch.update(threadRef, { categoryId: newCategoryId });

    // b) decrement old category’s counter
    const oldCatRef = db.collection("forumCategories").doc(oldCategoryId);
    batch.update(oldCatRef, {
      threadCount: admin.firestore.FieldValue.increment(-1),
    });

    // c) increment new category’s counter
    const newCatRef = db.collection("forumCategories").doc(newCategoryId);
    batch.update(newCatRef, {
      threadCount: admin.firestore.FieldValue.increment(1),
    });

    // d) commit
    await batch.commit();
    return res.status(200).send("Thread moved successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
};
