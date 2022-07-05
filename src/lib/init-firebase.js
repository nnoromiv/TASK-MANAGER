import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC9PnuIphguGnw0qaVLBGbIEq4PBYW5ZYg",
    authDomain: "redtech-interview.firebaseapp.com",
    databaseURL: "https://redtech-interview-default-rtdb.firebaseio.com",
    projectId: "redtech-interview",
    storageBucket: "redtech-interview.appspot.com",
    messagingSenderId: "922126535207",
    appId: "1:922126535207:web:d98ab51fcec3275bb09c02",
    measurementId: "G-B81EWPJSSB"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 // Initialize Firestore
export const db = getFirestore(app)