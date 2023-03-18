/*
  TODO: Add SDKs for Firebase products that you want to use
  * https://firebase.google.com/docs/web/setup#available-libraries
*/

//* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Bx_H64SyYCWR-PC2B9b_FmS4D7ZJCw8",
  authDomain: "register-vanilla-js-dashboard.firebaseapp.com",
  projectId: "register-vanilla-js-dashboard",
  storageBucket: "register-vanilla-js-dashboard.appspot.com",
  messagingSenderId: "903575069730",
  appId: "1:903575069730:web:3d67f5a84bfb4a987f167b",
};

//* Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
