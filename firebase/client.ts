
import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCl6LnyAIdF375NVeyKyddkLYxdAyBsmns",
  authDomain: "prepwise-94972.firebaseapp.com",
  projectId: "prepwise-94972",
  storageBucket: "prepwise-94972.firebasestorage.app",
  messagingSenderId: "37872911710",
  appId: "1:37872911710:web:dfe6b565820cd501027bcf",
  measurementId: "G-VSZYWRQ71E"
};

// Initialize Firebase
 const app =!getApps.length? initializeApp(firebaseConfig): getApp();
// Initialize Firebase Authentication and Firestore 
 export const auth = getAuth(app);
export const db = getFirestore(app);
// Initialize Firebase Analytics
// Note: Analytics is only available in web apps, so this will not work in Node.js environments
// const analytics = getAnalytics(app); 
