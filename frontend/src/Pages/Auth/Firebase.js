// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEo57bQ5iocvksfMLWkiGRiHaKiWfnrpg",
  authDomain: "messangergpt.firebaseapp.com",
  projectId: "messangergpt",
  storageBucket: "messangergpt.appspot.com",
  messagingSenderId: "1079401094909",
  appId: "1:1079401094909:web:a5f4278b47516512e22894",
  measurementId: "G-NQ0CGDQW0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const microsoftProvider = new MicrosoftAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");
microsoftProvider.setCustomParameters({
  prompt: "consent",
  tenant: "f8cdef31-a31e-4b4a-93e4-5f571e91255a", // Replace with your tenant ID if necessary
});

const db = getFirestore(app);

// export { db };
export { auth, googleProvider, microsoftProvider, db };
