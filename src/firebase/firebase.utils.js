import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcX8OSmlnRmSO_jsLt3GoHvFpjB1kttCI",
    authDomain: "crwn-db-6ab9a.firebaseapp.com",
    projectId: "crwn-db-6ab9a",
    storageBucket: "crwn-db-6ab9a.appspot.com",
    messagingSenderId: "626468154846",
    appId: "1:626468154846:web:80595eb69c5fe1eb35c14f",
    measurementId: "G-4QRLVJ6C32"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase;