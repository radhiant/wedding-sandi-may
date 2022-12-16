// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAz87QALkxKWb6RkIrreDW3XXQkxhprns",
  authDomain: "wedding-sandi-may.firebaseapp.com",
  projectId: "wedding-sandi-may",
  storageBucket: "wedding-sandi-may.appspot.com",
  messagingSenderId: "69034888521",
  appId: "1:69034888521:web:b54a087b404b39b1e39e98",
  measurementId: "G-24F503YM72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;