// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NT420-TjAUtGRhDxSAj1aJEpxpaw61E",
  authDomain: "e-commerce-libros.firebaseapp.com",
  projectId: "e-commerce-libros",
  storageBucket: "e-commerce-libros.appspot.com",
  messagingSenderId: "696039399126",
  appId: "1:696039399126:web:97d3112dd37dd56d4cf377",
  measurementId: "G-WBE9GR2LXH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;