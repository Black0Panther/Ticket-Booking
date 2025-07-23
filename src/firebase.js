// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA67w4PExdxRuVApF0aJX1-W9ZeigK-tyU",
  authDomain: "bookmyseat-f04d7.firebaseapp.com",
  projectId: "bookmyseat-f04d7",
  storageBucket: "bookmyseat-f04d7.firebasestorage.app",
  messagingSenderId: "497871557044",
  appId: "1:497871557044:web:b8a3e593f8fa0f1338a2e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);