// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVYmwL9Aa_VwSXjCGEEDB2viPFUosxq1Q",
  authDomain: "stackoverflow-clone-48cac.firebaseapp.com",
  projectId: "stackoverflow-clone-48cac",
  storageBucket: "stackoverflow-clone-48cac.appspot.com",
  messagingSenderId: "445027548158",
  appId: "1:445027548158:web:e24af258ae8a9286721eaf",
  measurementId: "G-GR1V5V659X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
