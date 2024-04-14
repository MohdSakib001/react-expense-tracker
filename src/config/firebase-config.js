// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi2CuIIM3Snyl8q3afY1W-OnHb7-b7KvY",
  authDomain: "expense-tracker-41d9c.firebaseapp.com",
  projectId: "expense-tracker-41d9c",
  storageBucket: "expense-tracker-41d9c.appspot.com",
  messagingSenderId: "490118681602",
  appId: "1:490118681602:web:1717dd47cfd703fb5b431b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
