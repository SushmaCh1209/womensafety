import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDXnkA-EijHoh7Cd4WPi6HmBqGY7LTAhyk",
  authDomain: "womensafety0695.firebaseapp.com",
  projectId: "womensafety0695",
  storageBucket: "womensafety0695.appspot.com",
  messagingSenderId: "470290245616",
  appId: "1:470290245616:web:ffee9ed59afd8c237b9f35",
  measurementId: "G-EQ50FVCSTM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
