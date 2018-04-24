import React, { Component } from 'react';
import './../styles/App.css';
import { rebase }  from '../config/constants';
import {loginWithGoogle} from '../helpers/auth';
import TopBar from './TopBar';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    authed: false,
    loading: true,
    zip: null
}

componentDidMount() {
    rebase.initializedApp.auth().onAuthStateChanged((user) => {
        if (user) {
         this.setState({
            authed: true, 
            loading: false, 
            uid: user.uid,
            photo: user.photoURL,
            name: user.displayName,
            user: user
          });              
        } else {
            this.setState({authed: false, loading: false, uid: null})
        }
    })
}

  render() {
    return (
      <div>
          <TopBar 
            authed={this.state.authed}
            name={this.state.name}
            photo={this.state.photo}
            login={()=>loginWithGoogle()}
          />
        <Dashboard
          user={this.state.user}
          authed={this.state.authed}
          login={()=>loginWithGoogle()}
          zip={this.state.zip}
        />
    </div>
    );
  }
}

export default App;
