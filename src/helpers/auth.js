import { googleProvider, rebase }  from '../config/constants'

export function auth (email, pw) {
  return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
    .then((data) => {
      console.log("data is", data);
      saveUser(data);
    })
}

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function login (email, pw) {
  return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
}

export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    saveUser(data.user);
  });
}

export function resetPassword (email) {
  return rebase.initializedApp.auth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`wakeupappusers/${user.uid}/deets`)
    .set({
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
      name: user.displayName
    })
    .then(() => {
      
      return user;
    })
}

// export function getUser(){
//   return 
// }
