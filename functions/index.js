/**
 * Root file for Cloud Functions (v2 API)
 *
 * – Limits every function to 10 concurrent instances
 * – Exposes two HTTPS functions:
 *     1) helloWorld  – demo / health-check
 *     2) moveThread  – admin-only “move thread to another category”
 */

const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest }        = require("firebase-functions/v2/https");
const logger               = require("firebase-functions/logger");

// ----------------------------------------------------
//   Global options – basic cost / performance guard
// ----------------------------------------------------
setGlobalOptions({ maxInstances: 10 });

/* ─────────────── demo endpoint ─────────────── */
exports.helloWorld = onRequest((req, res) => {
  logger.info("Hello logs!", { structuredData: true });
  res.send("Hello from Firebase!");
});

/* ─────────── forum-admin utilities ─────────── */
const moveThread = require("./moveThread");
exports.moveThread = onRequest(moveThread);
