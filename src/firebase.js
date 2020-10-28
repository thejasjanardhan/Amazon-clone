import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDk5AlgIVIkAycuP4K8lCPkh2zzKlc_Dc",
  authDomain: "clone-acf9b.firebaseapp.com",
  databaseURL: "https://clone-acf9b.firebaseio.com",
  projectId: "clone-acf9b",
  storageBucket: "clone-acf9b.appspot.com",
  messagingSenderId: "744703603201",
  appId: "1:744703603201:web:5e1cbaac1ee09f3f8c4600",
  measurementId: "G-NGGQHNQ1L0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
