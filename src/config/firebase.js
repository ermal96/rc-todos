import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "rc-todo-4b65c.firebaseapp.com",
    databaseURL: "https://rc-todo-4b65c.firebaseio.com",
    projectId: "rc-todo-4b65c",
    storageBucket: "rc-todo-4b65c.appspot.com",
    messagingSenderId: "529743216324",
    appId: "1:529743216324:web:2d2586d769b21d647d1391",
    measurementId: "G-3HQ0NNTYC2"
};

firebase.initializeApp(config);
export const Firestore = firebase.firestore();
export const Firebase = firebase;
