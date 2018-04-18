import React, { Component } from 'react';
import './../styles/App.css';
import TopBar from './TopBar';
import {rebase} from './../config/constants';
import Dashboard from './Dashboard';

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
    rebase.initializedApp.auth().onAuthStateChanged((user) => {
        if (user) {
                this.setState({
                    authed: true, 
                    loading: false, 
                    uid: user.uid,
                    photo: user.photoURL,
                    name: user.displayName
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
          />

        <div className="container">
        <Dashboard 
          authed={this.state.authed}
        />
        </div>
    </div>
    );
  }
}

export default App;
