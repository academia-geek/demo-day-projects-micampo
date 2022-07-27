import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDZ7NbQObnxTN1b0HcpAl5ohjh8lNOX6-s",
    authDomain: "micampo-63199.firebaseapp.com",
    projectId: "micampo-63199",
    storageBucket: "micampo-63199.appspot.com",
    messagingSenderId: "450008464949",
    appId: "1:450008464949:web:80151236fccc6c3cd27b7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage()
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export default app;
export { db, google, facebook, storage };
