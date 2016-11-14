import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker'

var ColorPickerContainer = React.createClass({
  render() {
  	 return (
      <div className="Color-picker-container">
        <div className="App-header">
          <h2>Color Picker v1.0</h2>
        </div>
        <p className="App-intro">
          <ColorPicker />
        </p>
      </div>
    )
  }
})

export default ColorPickerContainer;
