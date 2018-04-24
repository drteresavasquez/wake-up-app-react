import React, { Component } from 'react';
import './../styles/Weather.css';
import { rebase }  from '../config/constants';

class Weather extends Component{
    state={
        weather:'',
        city:'',
        error: null
    }
  
    componentDidMount(){
      this.getWeather()
    }
  
    getWeather = () => {
      let zipCode = this.props.zip
      var url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=ea4decbd9523a788936a0d1c56cb5751&units=imperial`
      fetch(url)
      .then(result => result.json())
      .then(
          (result) => {
        // let newDate = new Date(24 * 3600 * 1000)
        // if((newDate - this.props.date) > 24 ){
            return rebase.initializedApp.database().ref().child(`wakeupappusers/${this.props.user.uid}/weather`)
                .update({
                    weather: result.weather[0].main,
                    city: result.name,
                    temp: result.main.temp,
                })
                //   this.setState({
                //     weather: result.weather[0].main,
                //     city: result.name,
                //     temp: result.main.temp,
                //   })
        //   }
        },
          (error) => {
            this.setState({
              error: error
            })
          }
      )
    }
  
    render(){
      return(
          <div className='ui centered card'>
              <div className='content'>
                  <div className='header'>
                  {this.state.city}
                  </div>
                  <div className='meta'>
                  {this.props.zip}
                  </div>
                  <div className='center aligned description'>
                      <h2>
                          {this.state.temp} &#176;F
                      </h2>
                      <div className='weather'>
                          {this.state.weather}
                      </div>
                  </div>
                  <div className='extra content'>
                  <span
                    className='right floated edit icon'
                    onClick={this.props.onEditClick}>
                     <i className='edit icon' />
                  </span>
                  </div>
              </div>
          </div>
      )
    }
  }

  export default Weather;