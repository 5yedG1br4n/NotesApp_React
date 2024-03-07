// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl4otyxhNyD2DWG51swjKB0cK0OydwMTM",
  authDomain: "react-notes-28021.firebaseapp.com",
  projectId: "react-notes-28021",
  storageBucket: "react-notes-28021.appspot.com",
  messagingSenderId: "998417338577",
  appId: "1:998417338577:web:67b755510fd88d5f9bf5f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
