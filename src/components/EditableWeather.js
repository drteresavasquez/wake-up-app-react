import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import Weather from './Weather';

class EditableWeather extends Component {
    state = {
      editFormOpen: false,
    };
  
    handleEditClick = () => {
      this.openForm();
    };
  
    handleFormClose = () => {
      this.closeForm();
    };
  
    handleSubmit = (location) => {
      this.props.onFormSubmit(location);
      this.closeForm();
    };
  
    closeForm = () => {
      this.setState({ editFormOpen: false });
    };
  
    openForm = () => {
      this.setState({ editFormOpen: true });
    };
  
    render() {
      if (this.state.editFormOpen) {
        return (
            <WeatherForm
            user={this.props.user}
              id={this.props.id}
              zip={this.props.zip}
              onFormSubmit={this.handleSubmit} 
              onFormClose={this.handleFormClose}
            />
          );
        } else {
          return (
            <Weather
            user={this.props.user}
              id={this.props.id}
              zip={this.props.zip}
              onEditClick={this.handleEditClick}
            />
          );
        }
      }
    }




export default EditableWeather;