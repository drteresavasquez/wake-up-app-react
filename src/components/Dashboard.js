import React, {Component} from 'react';
import Jumbotron from './Jumbotron';
import {loginWithGoogle} from '../helpers/auth';
import WeatherDashboard from './WeatherDashboard';

class Dashboard extends Component{
    render(){
        return(
            <div>
            { 
                this.props.authed ? 
                (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <WeatherDashboard />
                            </div>
                            <div className="col-sm-8">col-8</div>
                        </div>
                    </div>
                ) : 
                (
                    <Jumbotron
                        title="Wake Up App"
                        copy="Here at Wake Up App we care about your day!"
                        link="#"
                        buttonText="Login"
                        onClick={() => this.props.login()}
                    />
                   
                )
            }
            </div>
        )
    }
}

export default Dashboard;