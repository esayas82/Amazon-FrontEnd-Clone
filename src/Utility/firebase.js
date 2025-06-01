
import  firebase  from "firebase/compat/app";
//authentication
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm6uaM597XWtVh5p_gfu8sfqUZzBhTphk",
  authDomain: "clone-28173.firebaseapp.com",
  projectId: "clone-28173",
  storageBucket: "clone-28173.firebasestorage.app",
  messagingSenderId: "1018504831963",
  appId: "1:1018504831963:web:853187070c22d1dfafbdfe"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();