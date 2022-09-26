// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"   

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpV2esxspGMHotSDt7fPQxZIESdXZaWk",
  authDomain: "react-firebase-bcecf.firebaseapp.com",
  projectId: "react-firebase-bcecf",
  storageBucket: "react-firebase-bcecf.appspot.com",
  messagingSenderId: "1092388290554",
  appId: "1:1092388290554:web:0a59042f342975b832ee43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth (app)