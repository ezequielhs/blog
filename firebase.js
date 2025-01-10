import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyABEDA_Xh_PHnqE_lUmsmbnJFPRWPoQm3Q",
    authDomain: "blog-70f43.firebaseapp.com",
    projectId: "blog-70f43",
    storageBucket: "blog-70f43.firebasestorage.app",
    messagingSenderId: "659726313584",
    appId: "1:659726313584:web:7c5de2b0e1abeb42962cb5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };