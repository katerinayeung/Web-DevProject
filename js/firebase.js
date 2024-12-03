// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6DTFZOcIuFqipxMmKt5YFX1GFwmzBiC0",
  authDomain: "coffeeshop2024-ac722.firebaseapp.com",
  projectId: "coffeeshop2024-ac722",
  storageBucket: "coffeeshop2024-ac722.firebasestorage.app",
  messagingSenderId: "1064140903269",
  appId: "1:1064140903269:web:85b30b2d085b56ae94c78c",
  measurementId: "G-L6F19YR4Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
