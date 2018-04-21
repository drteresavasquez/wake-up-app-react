import React, { Component } from 'react';
import EditableWeatherList from './EditableWeatherList';

class WeatherDashboard extends Component{
    state = {      
        locations: [
            {id: 1, zip: 38652},
          ]
        }

      handleEditFormSubmit = (attrs) => {
        this.updateWeather(attrs);
      };

      updateWeather = (attrs) => {
        this.setState({
          locations: this.state.locations.map((location) => {
            if (location.id === attrs.id) {
              return Object.assign({}, location, {
                zip: attrs.zip,
              });
            } else {
              return location;
            }
          }),
        });
      };

      newWeather = (attrs = {}) => {
        const location = {
          zip: attrs.zip || 'ZIP',
          id: this.state.locations.length + 1
        };
    
        return location;
      }

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