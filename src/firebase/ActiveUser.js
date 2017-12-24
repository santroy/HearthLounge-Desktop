export default function (callback){
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        return getUserData(user.uid, (v)=> callback(true, v));
      } else {
        callback(false, null);
      }
    });
  }