import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDMsAkaxWddakWgpni0-JX9W2b5kDR4Bfc",
    authDomain: "micampoapp-fffd6.firebaseapp.com",
    projectId: "micampoapp-fffd6",
    storageBucket: "micampoapp-fffd6.appspot.com",
    messagingSenderId: "188711649752",
    appId: "1:188711649752:web:3800b9207a86b844ab32ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage()
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export default app;
export { db, google, facebook, storage };
