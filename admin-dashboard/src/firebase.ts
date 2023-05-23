// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_mq2sNBf5w-5BqfkBzY-N42BZkN60ql4",
  authDomain: "web-app-a828c.firebaseapp.com",
  projectId: "web-app-a828c",
  storageBucket: "web-app-a828c.appspot.com",
  messagingSenderId: "399998617083",
  appId: "1:399998617083:web:3c5a343682e0f867ae375e",
  measurementId: "G-YQVZTRWQML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);