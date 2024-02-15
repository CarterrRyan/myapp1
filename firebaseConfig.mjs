import 'dotenv/config';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const config = dotenv.config();
console.log(config);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import Firebase Authentication

console.log(process.env.FIREBASE_API_KEY, "========")
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Get the authentication instance

export { db, auth }; // Export Firestore and Authentication