// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJmx3H1v9panosizay6zthjP_KyqoM2g",
  authDomain: "guitar-guru-cht.firebaseapp.com",
  projectId: "guitar-guru-cht",
  storageBucket: "guitar-guru-cht.appspot.com",
  messagingSenderId: "252281325339",
  appId: "1:252281325339:web:45a7fb98a8ae84dc3935be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
