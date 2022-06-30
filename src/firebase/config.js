// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ciWMvyhRWuE2-uIJIcJSsCs6wd-63wo",
  authDomain: "gsspym.firebaseapp.com",
  projectId: "gsspym",
  storageBucket: "gsspym.appspot.com",
  messagingSenderId: "840586325984",
  appId: "1:840586325984:web:67c561d62bbd5b828d4585",
  measurementId: "G-Y2K0NVXDGW",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);