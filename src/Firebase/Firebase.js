import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0wfwmyCaYOPKF6Pg7dQmCuWlHt1bvaJM",
    authDomain: "blog-todo-app.firebaseapp.com",
    databaseURL: "https://blog-todo-app.firebaseio.com",
    projectId: "blog-todo-app",
    storageBucket: "blog-todo-app.appspot.com",
    messagingSenderId: "318291475307",
    appId: "1:318291475307:web:b7c155857cf2b0baa92a2e",
    measurementId: "G-2B36H6BFGQ"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;

