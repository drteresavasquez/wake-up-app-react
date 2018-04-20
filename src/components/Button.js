import React, {Component} from 'react';

class Button extends Component{
    render(){
        return(
            <div>
            <a className="btn btn-primary btn-lg" onClick={this.props.onClick} href={this.props.link} role="button">{this.props.buttonText}</a>
            </div>
        )
    }
}

export default Button;
