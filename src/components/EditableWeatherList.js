import React, { Component } from 'react';
import EditableWeather from './EditableWeather';

class EditableWeatherList extends Component{
    render() {
      // const locations = this.props.locations.map((location) => (
        // <EditableWeather
        //   user={this.props.user}
        //   key={location.id}
        //   id={location.id}
        //   zip= {location.zip}
        //   date={location.date}
        //   onFormSubmit={this.props.onFormSubmit}
        // />
      // ))
      return (
        <div>
           {<EditableWeather
          user={this.props.user}
          key={this.props.id}
          id={this.props.id}
          zip= {this.props.zip}
          date={this.props.date}
          onFormSubmit={this.props.onFormSubmit}
          />}
          {/* {locations} */}
        </div>
      );
    }
  }

export default EditableWeatherList;