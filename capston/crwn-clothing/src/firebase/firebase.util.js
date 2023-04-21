import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAg0IFacXHIakEMXMsskaBP0JAC2TK2DhA",
  authDomain: "e-commerce-platform-f77fb.firebaseapp.com",
  projectId: "e-commerce-platform-f77fb",
  storageBucket: "e-commerce-platform-f77fb.appspot.com",
  messagingSenderId: "1038826097933",
  appId: "1:1038826097933:web:57b379b829b4dd8a4ef444",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
console.log(auth);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);
