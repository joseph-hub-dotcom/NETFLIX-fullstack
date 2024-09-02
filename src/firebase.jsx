// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0pDDCKEdbYEhfEebe0rdU8NsuFoJz4Hw",
  authDomain: "netflix-react-1b59f.firebaseapp.com",
  projectId: "netflix-react-1b59f",
  storageBucket: "netflix-react-1b59f.appspot.com",
  messagingSenderId: "210399040327",
  appId: "1:210399040327:web:9068602d5109ab7d403262",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
