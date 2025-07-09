import React from "react";
import { auth, googleProvider, signInWithPopup } from "../firebase";

const Login = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Signed in user:", user.displayName);
      // You can redirect or store user in localStorage if needed
    } catch (error) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign in to KnowNaija</h2>
      <button onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
