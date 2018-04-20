import React, { Component } from 'react';
import './../styles/App.css';
import TopBar from './TopBar';
import {rebase} from './../config/constants';
import Dashboard from './Dashboard';

class App extends Component {
  state = {
    authed: false,
    loading: true,
    zip: 12345
}

componentDidMount() {
    rebase.initializedApp.auth().onAuthStateChanged((user) => {
        if (user) {
         this.setState({
            authed: true, 
            loading: false, 
            uid: user.uid,
            photo: user.photoURL,
            name: user.displayName
          });          
          // this.getLocation();
    
        } else {
                this.setState({authed: false, loading: false, uid: null})
            }
    })
}

//  getLocation = () => {
//     var geoSuccess = function(position) {  
//       const startPos = position;
//       console.log("LATT", startPos.coords.latitude);
//       console.log("LONG", startPos.coords.longitude);
//     };
//     var geoError = function(error) {
//       switch(error.code) {
//         case error.TIMEOUT:
//         console.log("REJECTED!!!");
//           break;
//         default:
//         break;
//       }
//     };
//     navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
// }

  render() {
    return (
      <div>
          <TopBar 
            authed={this.state.authed}
            name={this.state.name}
            photo={this.state.photo}
          />
        <Dashboard 
          authed={this.state.authed}
        />
    </div>
    );
  }
}

export default App;
