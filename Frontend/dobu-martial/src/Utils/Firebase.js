// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseapiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: firebaseapiKey,
  authDomain: "dobu-martial.firebaseapp.com",
  projectId: "dobu-martial",
  storageBucket: "dobu-martial.firebasestorage.app",
  messagingSenderId: "340986309640",
  appId: "1:340986309640:web:0331bf0f5feb1b4a2b35bd",
  measurementId: "G-3W9PKJHZBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const store = getStorage(app);