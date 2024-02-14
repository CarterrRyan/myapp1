
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0otgNSPXk3f47sOKrE-5okRuGJpdPYg",
  authDomain: "my-first-firebase-9eddc.firebaseapp.com",
  databaseURL: "https://my-first-firebase-9eddc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-first-firebase-9eddc",
  storageBucket: "my-first-firebase-9eddc.appspot.com",
  messagingSenderId: "905782179773",
  appId: "1:905782179773:web:69bfb5ab4eba1433b284d4",
  measurementId: "G-1NQL6G9RBR"
};

const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
