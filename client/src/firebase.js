import firebase from "firebase"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAlris7cTiSUS789d7n2csm1V5nFCu6yOE",
    authDomain: "twitter-clone-1bbc4.firebaseapp.com",
    projectId: "twitter-clone-1bbc4",
    storageBucket: "twitter-clone-1bbc4.appspot.com",
    messagingSenderId: "918455668728",
    appId: "1:918455668728:web:0a2cfa10789c8c66f9900d",
    measurementId: "G-SRQTVQBM23"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 const db = firebase.firestore();

 export default db;