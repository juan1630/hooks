// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOGPbpuxHpZax1MG86JsfDGLxi9TN18_w",
    authDomain: "react-curso-15f1b.firebaseapp.com",
    projectId: "react-curso-15f1b",
    storageBucket: "react-curso-15f1b.appspot.com",
    messagingSenderId: "539601482948",
    appId: "1:539601482948:web:804021b6d62373b15fc591"
};

// Initialize Firebase

//configuracion del firebase 
const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( firebaseApp );
export const FirebaseDB = getFirestore( firebaseApp  );