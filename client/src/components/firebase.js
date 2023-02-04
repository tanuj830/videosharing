// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ72Gv6rxwvrSjtA5mNWAr-kG-o7AHSKw",
  authDomain: "videoshare-fbc8b.firebaseapp.com",
  projectId: "videoshare-fbc8b",
  storageBucket: "videoshare-fbc8b.appspot.com",
  messagingSenderId: "643147135059",
  appId: "1:643147135059:web:de8183a9d56b4bb47c2ea6",
  measurementId: "G-SRDMWZ8T79"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);

 export default app