// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm1Ur5eVk59bp6aHgFWrSfjyo4jlcDMg4",
  authDomain: "email-pass-ac783.firebaseapp.com",
  projectId: "email-pass-ac783",
  storageBucket: "email-pass-ac783.firebasestorage.app",
  messagingSenderId: "11709125553",
  appId: "1:11709125553:web:99d3f0ca2295090962e390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;