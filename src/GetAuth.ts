import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC_-Xn3L0765keeJSzVLjYGIwe6XVQ7vRM",
    authDomain: "fir-auth-9e0be.firebaseapp.com",
    projectId: "fir-auth-9e0be",
    storageBucket: "fir-auth-9e0be.appspot.com",
    messagingSenderId: "551495403361",
    appId: "1:551495403361:web:ecd157ca4ec2ff58606720",
    measurementId: "G-TFT704Z1KC"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();