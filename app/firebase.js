// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5jZ9bSDit74jHenzvmHa_2JzUADazhgQ",
  authDomain: "photo-gallery-9ca62.firebaseapp.com",
  projectId: "photo-gallery-9ca62",
  storageBucket: "photo-gallery-9ca62.appspot.com",
  messagingSenderId: "1070040245841",
  appId: "1:1070040245841:web:9bdc2d3eb229779f72fa70",
  measurementId: "G-8RTQB5PCXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window != "undefined") {
  const analytics = getAnalytics(app);
}

export default app;