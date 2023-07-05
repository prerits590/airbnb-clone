// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoG9vZgCaKp11MwTwdF-qSHzIRw0Cuh80",
  authDomain: "airbnb-5901d.firebaseapp.com",
  projectId: "airbnb-5901d",
  storageBucket: "airbnb-5901d.appspot.com",
  messagingSenderId: "687098349256",
  appId: "1:687098349256:web:df5775c86d8fe58b04c7fd",
  measurementId: "G-WCPMKPLPNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();

export{app, auth};

