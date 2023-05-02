// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJrdMccKN0if5WDH-3s0C8yEAVRDVlKkg",
  authDomain: "react-yt-5ddea.firebaseapp.com",
  projectId: "react-yt-5ddea",
  storageBucket: "react-yt-5ddea.appspot.com",
  messagingSenderId: "553774716772",
  appId: "1:553774716772:web:9b11cc2eb6cddd8f8e8c71",
  measurementId: "G-QX7QH23DF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)