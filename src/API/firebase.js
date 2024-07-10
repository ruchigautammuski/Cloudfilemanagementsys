import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHMIF2SZwytG27rvSOCcqeFVy0tnqTCpQ",
  authDomain: "filemanagementruchi.firebaseapp.com",
  projectId: "filemanagementruchi",
  storageBucket: "filemanagementruchi.appspot.com",
  messagingSenderId: "933301881775",
  appId: "1:933301881775:web:e75620b746571a70153d5a",
  measurementId: "G-77FPXMM0Z4"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  docs: firestore.collection("docs"),
  files: firestore.collection("files"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
