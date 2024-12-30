import React, { createContext, useContext } from "react";
import { auth, provider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { signInWithPopup } from "firebase/auth";

import { toast } from "react-toastify"; // Import Toastify components

export const FirebaseContext = createContext(null);

export const useFirebaseContext = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const SignInUsingGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => toast.success("Google Signin..."))
      .then((errorData) =>
        toast.error(
          errorData.message || "Registration failed. Please try again."
        )
      );
  };
  const SignUpUsingEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        toast.success("Registration successful! Redirecting to login...")
      )
      .catch((errorData) =>
        toast.error(
          errorData.message || "Registration failed. Please try again."
        )
      );
  };
  const SignInUsingEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => toast.success("Login successful!"))
      .catch((errorData) =>
        toast.error(
          errorData.message || "Registration failed. Please try again."
        )
      );
  };
  const Logout = () => {
    signOut(auth)
      .then(() => toast.success("Logout successful!"))
      .catch((errorData) =>
        toast.error(
          errorData.message || "Registration failed. Please try again."
        )
      );
  };
  return (
    <FirebaseContext.Provider
      value={{
        SignInUsingGoogle,
        SignInUsingEmailAndPassword,
        SignUpUsingEmailAndPassword,
        Logout,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
