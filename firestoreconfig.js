// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDKSJfAZLNWA328ArcCdQXwtRMiIaRm7dA",
authDomain: "dbproj-f3054.firebaseapp.com",
projectId: "dbproj-f3054",
storageBucket: "dbproj-f3054.appspot.com",
messagingSenderId: "352306058995",
appId: "1:352306058995:web:962d3872b952ef33478986"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
export {db};
