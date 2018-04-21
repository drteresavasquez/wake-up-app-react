import React, { Component } from 'react';
import EditableWeather from './EditableWeather';

class EditableWeatherList extends Component{
    render() {
      const locations = this.props.locations.map((location) => (
        <EditableWeather
          user={this.props.user}
          key={location.id}
          id={location.id}
          zip= {location.zip}
          onFormSubmit={this.props.onFormSubmit}
        />
      ))
      return (
        <div>
          {locations}
        </div>
      );
    }
  }

export default EditableWeatherList;