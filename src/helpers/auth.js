import { googleProvider, rebase }  from '../config/constants'

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    saveUser(data.user);
  });
}


export function saveUser (user) {
  return rebase.initializedApp.database().ref().child(`wakeupappusers/${user.uid}/deets`)
    .update({
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
      name: user.displayName,
      zip: ''
    })
    .then(() => {
      return user;
    })
}

// export function getUser(){
//   return 
// }
