import React, {Component} from 'react';

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
                    <p></p>// <button onClick={() => this.authenticate('google')} className="ui primary button">Login Google</button>
                )
            }
            </div>
        )
    }
}

export default Dashboard;