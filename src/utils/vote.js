// src/utils/vote.js
//
// vote({ type:'thread'|'comment', id }, uid, direction)
//   direction:  1  = up-vote
//              -1  = down-vote
//               0  = remove vote
//
// Handles score math + voters map in a single Firestore transaction.

import { doc, runTransaction } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Apply a vote to a thread or comment
 * @param {{type:'thread'|'comment', id:string}} target
 * @param {string} uid            the voter’s UID
 * @param {number} direction      1 (up), -1 (down), or 0 (remove)
 */
export async function vote(target, uid, direction) {
  if (![1, 0, -1].includes(direction)) {
    throw new Error('direction must be 1, 0, or -1');
  }

  const col = target.type === 'thread' ? 'forumThreads' : 'forumComments';
  const ref = doc(db, col, target.id);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error('Document not found');

    const data   = snap.data();
    const voters = data.voters || {};
    const prev   = voters[uid] || 0;           // previous vote (1, -1, or 0)

    if (prev === direction) return;            // no change

    const delta = direction - prev;            // +1, -1, +2, or -2
    voters[uid] = direction;                   // update map

    tx.update(ref, {
      score: (data.score || 0) + delta,
      voters
    });
  });
}
