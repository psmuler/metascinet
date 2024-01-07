import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCANwsU0WxGsAu-Xh6rciFlBt00RVD0K6Y",
    authDomain: "metascinet.firebaseapp.com",
    databaseURL: "https://metascinet-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "metascinet",
    storageBucket: "metascinet.appspot.com",
    messagingSenderId: "435357309005",
    appId: "1:435357309005:web:9ae86ed406652df37de404",
    measurementId: "G-1N9SJB09MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
