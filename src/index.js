// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACyLCCuwAMwCN7bOHddtE0tG-DQdVPONs",
  authDomain: "fir-demo-f6ba1.firebaseapp.com",
  projectId: "fir-demo-f6ba1",
  storageBucket: "fir-demo-f6ba1.appspot.com",
  messagingSenderId: "564877438581",
  appId: "1:564877438581:web:9bdf22d30bf042dc1b123c",
  measurementId: "G-CF8CQJHTWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in");
    } else{
        console.log("No user")
    }
})