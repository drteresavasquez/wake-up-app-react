import React, {Component} from 'react';
import {logout} from '../helpers/auth'
import {loginWithGoogle} from '../helpers/auth';
import './../styles/TopBar.css';
// import Client from '../Client';


class TopBar extends Component {
    authenticate = () => {
        console.log('App: calling autheticate for google');
        loginWithGoogle();
    }

    logoutApp = () => {
        console.log('App: calling logoutApp')
        logout();
    }
    render() {
        return(
            <div>
                <div className="ui top attached menu">
                { this.props.authed ? 
                    (<div className="item">
                    <img className="ui mini circular image" src={this.props.photo} alt="User Avatar"/>
                        <div className="content">
                        <div className="ui sub header">Hello,</div>
                        {this.props.name}<br />
                        <a className="logout" onClick={() => {this.logoutApp()}}>Logout</a>
                        </div>
                    </div>):(<div className="item">
                    <img className="ui mini circular image" src="wakeupapp.png" alt="User Avatar"/>
                        <div className="content">
                        <div className="ui sub header">Welcome To</div>
                        Wake Up App
                        </div>
                    </div>)
                }
                    <div className="right menu">
                        {this.props.authed ? 
                            (
                                <p>PUT WEATHER COMPONENT HERE</p>
                            ) : 
                            (
                                <button onClick={() => this.authenticate('google')} className="ui primary button">Login Google</button>
                            )
                        }
                    </div>
                </div> 
                <div className="container">
                    {this.props.authed ? 
                        (
                            <p>PUT OTHER COMPONENTS</p>
                        ) : 
                        (
                            <p></p>// <button onClick={() => this.authenticate('google')} className="ui primary button">Login Google</button>
                        )
                    }
                </div>
            </div>           
        );
    }

}

export default TopBar;
