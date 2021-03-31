import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: "elviancakes",
  databaseURL: "DATABASE_URL",
  authDomain: "elviancakes.firebaseapp.com",
  appId: "1:123430889580:web:d4976b93c4aac40d895049",
  storageBucket: "elviancakes.appspot.com",
  messagingSenderId: "123430889580"
};

firebase.initializeApp(config);
firebase.analytics();

export const db = firebase.firestore()
export const auth = firebase.auth()