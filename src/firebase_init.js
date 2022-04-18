// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOao8PCu8Crq_Gz-djFyLzxqjogfKpNIs",
  authDomain: "natural-photographer.firebaseapp.com",
  projectId: "natural-photographer",
  storageBucket: "natural-photographer.appspot.com",
  messagingSenderId: "937901853183",
  appId: "1:937901853183:web:2e7f104059fdb155953fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;