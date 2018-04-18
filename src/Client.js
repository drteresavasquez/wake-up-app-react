// import React, {Component} from 'react';
// import {logout} from './helpers/auth'
// import {loginWithGoogle} from './helpers/auth';
// import {rebase} from './config/constants';

// class Client extends Component{
// state = {
//     authed: false,
//     loading: true,
//     uid: null,
//     name: null,
//     photo: null
// }

// componentDidMount() {
//     console.log("componentDidMount");
//     this.authListener = rebase.initializedApp.auth()
//         .onAuthStateChanged((user) => {
//             if (user) {
//                 this.setState({
//                     authed: true, 
//                     loading: false, 
//                     uid: user.uid,
//                     photo: user.photoURL,
//                     name: user.displayName
//                 });
//                 //get DB stuff for user here
//             } else {
//                 this.setState({authed: false, loading: false, uid: null})
//             }
//         })
// }

// isLoggedIn = () => {
//     return this.state.authed;
//   }

// authenticate = () => {
//     console.log('App: calling autheticate for google');
//     loginWithGoogle();
// }

// logoutApp = () => {
//     console.log('App: calling logoutApp')
//     logout();
// }
// }

// export default Client;