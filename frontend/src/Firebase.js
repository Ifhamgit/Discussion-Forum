// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5usbWZXRg8F2WrsJtVoUic-GoKqZxkmY",
  authDomain: "discussion-forum-2d7d4.firebaseapp.com",
  projectId: "discussion-forum-2d7d4",
  storageBucket: "discussion-forum-2d7d4.appspot.com",
  messagingSenderId: "247709539198",
  appId: "1:247709539198:web:96ee7c98105727461bf12f",
  measurementId: "G-R05V35BCHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth()
const provider = new GoogleAuthProvider()

export{auth, provider}