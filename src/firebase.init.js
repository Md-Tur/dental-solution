// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3C0etKOnOD2hC7a1lCnFfy-1k9-v1qz8",
    authDomain: "dental-solution-6f8eb.firebaseapp.com",
    projectId: "dental-solution-6f8eb",
    storageBucket: "dental-solution-6f8eb.appspot.com",
    messagingSenderId: "812506459742",
    appId: "1:812506459742:web:9f4f79a89eaa5b87750ecf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;