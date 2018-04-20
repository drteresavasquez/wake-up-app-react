import React, {Component} from 'react';
import Jumbotron from './Jumbotron';
import {loginWithGoogle} from '../helpers/auth';

class Dashboard extends Component{
    render(){
        return(
            <div>
            { 
                this.props.authed ? 
                (
                    <p>PUT OTHER COMPONENTS</p>
                ) : 
                (
                    <Jumbotron
                        title="Title"
                        copy="Copy"
                        link="#"
                        buttonText="Button Text"
                        onClick={() => loginWithGoogle()}
                    />
                )
            }
            </div>
        )
    }
}

export default Dashboard;