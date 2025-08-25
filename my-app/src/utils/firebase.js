import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsYTjQuP6xVTG-DzfU_KxI1nY0Llwf7Ag",
  authDomain: "realestateauth-56cab.firebaseapp.com",
  projectId: "realestateauth-56cab",
  storageBucket: "realestateauth-56cab.appspot.com", 
  messagingSenderId: "506426349101",
  appId: "1:506426349101:web:d4ad432693a6e219514aa4",
  measurementId: "G-HHGG2879LL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { auth };
