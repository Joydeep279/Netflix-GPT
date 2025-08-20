// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmq3ojbMbcxVf04PBpIMUYhh_LMTLSWrA",
  authDomain: "netflix-gpt-7a0cb.firebaseapp.com",
  projectId: "netflix-gpt-7a0cb",
  storageBucket: "netflix-gpt-7a0cb.firebasestorage.app",
  messagingSenderId: "234887841851",
  appId: "1:234887841851:web:c5f28e318de5e4fc2eb41e",
  measurementId: "G-P82KY9F9ME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
console.log("auth:", auth);
