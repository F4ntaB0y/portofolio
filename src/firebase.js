// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG7meq6RUrC0JWUkgQf-_2ZhxX4wMic0A",
  authDomain: "portofolio-aestu.firebaseapp.com",
  projectId: "portofolio-aestu",
  storageBucket: "portofolio-aestu.firebasestorage.app",
  messagingSenderId: "472793094283",
  appId: "1:472793094283:web:f27ce099fd3334e00a9c8e",
  measurementId: "G-5FHXLRC8BB"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
