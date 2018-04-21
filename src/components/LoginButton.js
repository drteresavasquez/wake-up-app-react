import React, {Component} from 'react';

class LoginButton extends Component{
    render(){
        return(
            <div>
            <a className="btn btn-primary btn-lg login" onClick={this.props.onClick} href={this.props.link} role="button">{this.props.buttonText}</a>
            </div>
        )
    }
}

export default LoginButton;
