// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"


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
export const app = initializeApp(firebaseConfig);


