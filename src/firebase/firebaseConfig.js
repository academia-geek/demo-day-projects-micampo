// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDZ7NbQObnxTN1b0HcpAl5ohjh8lNOX6-s",
   authDomain: "micampo-63199.firebaseapp.com",
   projectId: "micampo-63199",
   storageBucket: "micampo-63199.appspot.com",
   messagingSenderId: "450008464949",
   appId: "1:450008464949:web:80151236fccc6c3cd27b7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore();