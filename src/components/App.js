import React, { Component } from 'react';
import './../styles/App.css';
import {saveUser} from '../helpers/auth';
import TopBar from './TopBar';
import {googleProvider, rebase} from './../config/constants';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    authed: false,
    loading: true,
}

componentDidMount() {
    rebase.initializedApp.auth().onAuthStateChanged((user) => {
        if (user) {
         this.setState({
            authed: true, 
            loading: false, 
          });              
        } else {
            this.setState({authed: false, loading: false, uid: null})
        }
    })
}

 loginWithGoogle = () => {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    // Check FB for the authenticated user
    rebase.fetch(`wakeupappusers/${data.user.uid}/deets`, {
      context: this,
      then(userData){
        // if the user does not exist add them to FB
        if(Object.keys(userData).length === 0){
          saveUser(data.user);
        // otherwise, set state with the stuff from FB
        }else{
          console.log(userData);
          this.setState({
            uid: userData.uid,
            photo: userData.photo,
            name: userData.name,
            zip: userData.zip,
            user: userData
          })
        }
      }
    });
  });
}
  render() {
    return (
      <div>
          <TopBar 
            authed={this.state.authed}
            name={this.state.name}
            photo={this.state.photo}
            login={this.loginWithGoogle}
          />
        <Dashboard
          user={this.state.user}
          authed={this.state.authed}
        />
    </div>
    );
  }
}

export default App;
