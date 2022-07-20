// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC928ZRtgkz7yHGEU7z7mZM_euynMshIQ4",
  authDomain: "musiccloud-d2195.firebaseapp.com",
  projectId: "musiccloud-d2195",
  storageBucket: "musiccloud-d2195.appspot.com",
  messagingSenderId: "1074990615581",
  appId: "1:1074990615581:web:20d9fcbc461593ceac8af4",
  measurementId: "G-XESR5JGV8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);