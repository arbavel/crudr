import firebase from 'firebase/app'
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl9A8EPKSLnkDhIT-0ty5Yql8xnwNwOH0",
  authDomain: "crud-react-38ae2.firebaseapp.com",
  projectId: "crud-react-38ae2",
  storageBucket: "crud-react-38ae2.appspot.com",
  messagingSenderId: "409885734169",
  appId: "1:409885734169:web:be6eb87edff853da098188"
};

//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebase);
//const db = firebase.firestore();

//export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firebaseApp = firebase.initializeApp(firebaseConfig)