import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC5nGlpdSUO1DihOK5fQI855YIQpZzP_xk",
  authDomain: "exercisedb-20924.firebaseapp.com",
  databaseURL: "https://exercisedb-20924.firebaseio.com"
});
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();