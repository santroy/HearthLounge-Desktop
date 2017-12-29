import { refParent, firebaseAuth, firestore, ref, firebaseStorage } from './Config';

export default function getActiveUser(action){
  firebaseAuth().onAuthStateChanged(user => {
    if (user) {
      return getUserData(user.uid, (v)=> action(v));
    } else {
      action(null);
    }
  });
}

function getUserData(uid, callback) {
  return refParent('users').on("value", (snapshot) => callback(snapshot.child(uid).val()))
}