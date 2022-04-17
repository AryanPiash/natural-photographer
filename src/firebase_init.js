// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWYT2oYIszOsWr0Hu4MREimjC4Ek1Y6oU",
  authDomain: "genius-car-service-cea3a.firebaseapp.com",
  projectId: "genius-car-service-cea3a",
  storageBucket: "genius-car-service-cea3a.appspot.com",
  messagingSenderId: "689628270214",
  appId: "1:689628270214:web:71eea36670130fe8510b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;