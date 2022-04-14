import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBE76AzRfqlQ0jFdDEHPW5ocLe_0SL6nuo",
  authDomain: "vue-walkie-talkie-99b89.firebaseapp.com",
  projectId: "vue-walkie-talkie-99b89",
  storageBucket: "vue-walkie-talkie-99b89.appspot.com",
  messagingSenderId: "183730490307",
  appId: "1:183730490307:web:4da14c96c70403f9c90b76"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
