
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1naibA2YjzAnCBfQRB_FbK95DQHYbyg8",
    authDomain: "week7-pinliang.firebaseapp.com",
    projectId: "week7-pinliang",
    storageBucket: "week7-pinliang.appspot.com",
    messagingSenderId: "795784017115",
    appId: "1:795784017115:web:7d2b1a1abaf787f90288fe"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  const db = getFirestore()
  export default db