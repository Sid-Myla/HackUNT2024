// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZq99a0j80NYnAfmTioYnS4cqm4O8ztAI",
  authDomain: "hackunt-ba056.firebaseapp.com",
  databaseURL: "https://hackunt-ba056-default-rtdb.firebaseio.com",
  projectId: "hackunt-ba056",
  storageBucket: "hackunt-ba056.appspot.com",
  messagingSenderId: "824136987304",
  appId: "1:824136987304:web:68d90a6c3f4bc3b467089d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };