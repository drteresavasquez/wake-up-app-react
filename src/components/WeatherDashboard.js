import React, { Component } from 'react';
import EditableWeatherList from './EditableWeatherList';
import { rebase }  from '../config/constants';

class WeatherDashboard extends Component{
    state = {      
        locations: []
        }
      
      componentWillMount = () => {
        const userID = this.props.user.uid;
        rebase.fetch(`wakeupappusers/${userID}/weather`, {
          context: this,
          then(weather){
            if(Object.keys(weather).length === 0){
              this.setState({
                locations:[{id: 1, zip: 38652}]
              })
            }else{
              this.setState({
                locations:[{id: weather.id, zip: weather.zip}]
              })
            }
          }
        });
      }

      handleEditFormSubmit = (attrs) => {
        this.updateWeather(attrs);
      };

    updateWeather = (attrs) => {
      const userID = this.props.user.uid;
      this.setState({
        locations: this.state.locations.map((location) => {
          if (location.id === attrs.id) {
            return rebase.initializedApp.database().ref().child(`wakeupappusers/${userID}/weather`)
              .update({
                id: Number(attrs.zip),
                zip: Number(attrs.zip),
                date: Date.now()
              }).then((data)=>{
                this.setState({
                  locations:[{
                    id: Number(attrs.zip),
                    zip: Number(attrs.zip),
                    date: Date.now()
                }]
                });
              })        
            }else {
            return location;
          }
        }),
      });
    };

    render() {
        return (
          <div>
            <EditableWeatherList 
              user={this.props.user}
              locations={this.state.locations}
              onFormSubmit={this.handleEditFormSubmit}
            />
          </div>
        );
      }
}

export default WeatherDashboard;