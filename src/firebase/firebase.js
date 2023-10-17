// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0RUg_OgKXWaQPVB4g4mU3BEbWBVIQZQo",
  authDomain: "coffee-store-37228.firebaseapp.com",
  projectId: "coffee-store-37228",
  storageBucket: "coffee-store-37228.appspot.com",
  messagingSenderId: "949695070518",
  appId: "1:949695070518:web:9efbc10f2fa6a4c77df397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;