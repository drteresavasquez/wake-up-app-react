import React, {Component} from 'react';
import Button from './Button';

class Jumbotron extends Component{
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{this.props.title}</h1>
                    <p className="lead">{this.props.copy}</p>
                    <Button 
                        link={this.props.link}
                        buttonText={this.props.buttonText}
                        onClick={this.props.onClick}
                    />
                </div>
            </div>
        )
    }
}

export default Jumbotron;
