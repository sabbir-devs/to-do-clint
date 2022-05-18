import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3S_Gbc8wfkCHJjvV6fJru5HQHB-jjoTA",
  authDomain: "to-do-83ded.firebaseapp.com",
  projectId: "to-do-83ded",
  storageBucket: "to-do-83ded.appspot.com",
  messagingSenderId: "472357685869",
  appId: "1:472357685869:web:f4e2daedd323b1d7164d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;