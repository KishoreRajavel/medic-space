// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-4neIU5g5d8bd3BAwGh0Dsc5e12Qsk-A",
  authDomain: "medic-space.firebaseapp.com",
  projectId: "medic-space",
  storageBucket: "medic-space.appspot.com",
  messagingSenderId: "277915771004",
  appId: "1:277915771004:web:0c4c296414c9ea2d4da9f9",
  measurementId: "G-XY4892R653",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
