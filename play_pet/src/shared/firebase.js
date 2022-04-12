import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDq40-OMUruGDSfE-sGf7d5msK6kG4ckIQ",
  authDomain: "week5-homework-30b28.firebaseapp.com",
  projectId: "week5-homework-30b28",
  storageBucket: "week5-homework-30b28.appspot.com",
  messagingSenderId: "559078728990",
  appId: "1:559078728990:web:f4083175174ccb0c7c950f"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;

const auth = firebase.auth();

export {auth, apiKey};