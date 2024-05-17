// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmFmtpyYNvpJQbNdIStz9H5fvNUgBQr4U",
  authDomain: "social-media-app-react-n-de365.firebaseapp.com",
  projectId: "social-media-app-react-n-de365",
  storageBucket: "social-media-app-react-n-de365.appspot.com",
  messagingSenderId: "175052491319",
  appId: "1:175052491319:web:ddf40c7286dfd021fd4db2",
  measurementId: "G-SC9PEZLK32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);