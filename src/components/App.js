import React, { Component } from 'react';
import './../styles/App.css';
import TopBar from './TopBar';
import {rebase} from './../config/constants';
// import { Route, BrowserRouter, Link, Switch, withRouter } from 'react-router-dom'
// import {logout} from '../helpers/auth'
// import {loginWithGoogle} from '../helpers/auth';

class App extends Component {

  state = {
    authed: false,
    loading: true,
    uid: null,
    name: null,
    photo: null
}

componentDidMount() {
    console.log("componentDidMount");
    this.authListener = rebase.initializedApp.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true, 
                    loading: false, 
                    uid: user.uid,
                    photo: user.photoURL,
                    name: user.displayName
                });
                //get DB stuff for user here
            } else {
                this.setState({authed: false, loading: false, uid: null})
            }
        })
}
  render() {
    return (
      <div>
      <div>
      <TopBar 
        authed={this.state.authed}
        loading={this.state.loading}
        uid={this.state.uid}
        name={this.state.name}
        photo={this.state.photo}
      />
        </div>
    </div>
    );
  }
}

export default App;
