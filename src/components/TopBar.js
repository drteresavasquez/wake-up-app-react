import React, {Component} from 'react';
import {logout} from '../helpers/auth'
import {loginWithGoogle} from '../helpers/auth';
import './../styles/TopBar.css';
import logo from './../images/wakeupapp.png';

class TopBar extends Component {
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
                        <a className="logout" onClick={() => {logout()}}>Logout</a>
                        </div>
                    </div>):(<div className="item">
                    <img className="ui mini circular image" src={logo} alt="User Avatar"/>
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
                            <button onClick={() => loginWithGoogle()} className="ui primary button">Login</button>
                        )
                    }
                </div>
            </div> 
        </div>           
        );
    }

}

export default TopBar;
