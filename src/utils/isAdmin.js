import { auth } from '../firebase';

/**
 * Returns a Promise<boolean> that resolves to true if the
 * current user has { role: 'admin' } in their token.
 */
export async function isAdmin() {
  const user = auth.currentUser;
  if (!user) return false;

  const { claims } = await user.getIdTokenResult();
  return claims.role === 'admin';
}
