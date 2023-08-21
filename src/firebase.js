// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBdqTVMqGcnUZe0TdmMVM7SyvwxCUNFsY",
  authDomain: "chat-90ade.firebaseapp.com",
  projectId: "chat-90ade",
  storageBucket: "chat-90ade.appspot.com",
  messagingSenderId: "797226002283",
  appId: "1:797226002283:web:5f640aba6d2fe9349e0e2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
