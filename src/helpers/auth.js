import { googleProvider, rebase }  from '../config/constants'

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function loginWithGoogle() {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    // Check FB for the authenticated user
    rebase.fetch(`wakeupappusers/${data.user.uid}/deets`, {
      context: this,
      then(userData){
        // if the user does not exist add them to FB
        if(Object.keys(userData).length === 0){
          saveUser(data.user);
        }
      }
    });
  });
}

export function saveUser(user) {
  return rebase.initializedApp.database().ref().child(`wakeupappusers/${user.uid}/deets`)
    .update({
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
      name: user.displayName,
      zip: null
    })
    .then(() => {
      return user;
    })
}