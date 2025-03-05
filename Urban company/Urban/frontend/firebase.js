// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAayDURVdhaLjz_1Tk2nEHoLiFfg1tX6wo",
  authDomain: "urbancompany-2187b.firebaseapp.com",
  projectId: "urbancompany-2187b",
  storageBucket: "urbancompany-2187b.firebasestorage.app",
  messagingSenderId: "98733196994",
  appId: "1:98733196994:web:8a9a70ffb2edc5a61b9d5b",
  measurementId: "G-MVEL8W5N3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth