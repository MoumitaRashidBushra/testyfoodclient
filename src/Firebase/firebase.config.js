// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVQwWXna8fjNJCe0GHUgjcI0wyjK-abuk",
    authDomain: "testy-food-hunter.firebaseapp.com",
    projectId: "testy-food-hunter",
    storageBucket: "testy-food-hunter.appspot.com",
    messagingSenderId: "488852797940",
    appId: "1:488852797940:web:a063dec8071c4e535c21a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;