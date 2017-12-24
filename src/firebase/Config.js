import firebase from 'firebase';
import 'firebase/firestore';

export const FirebaseConfig = {
    apiKey: "AIzaSyC0llLdIXWVVcVkMc3r1sF_OpwrxctXe58",
    authDomain: "hearthlounge-32197.firebaseapp.com",
    databaseURL: "https://hearthlounge-32197.firebaseio.com",
    projectId: "hearthlounge-32197",
    storageBucket: "hearthlounge-32197.appspot.com",
    messagingSenderId: "313812762792"
  };
  
  firebase.initializeApp(FirebaseConfig);
  
  export const refParent = (parent) => {
    return firebase.database().ref(parent);
  };
  
  export const ref = firebase.database().ref();
  export const firestore = firebase.firestore();
  export const firebaseAuth = firebase.auth;
  export const firebaseStorage = firebase.storage;