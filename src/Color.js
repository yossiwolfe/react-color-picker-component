import React from 'react';
import './App.css';

var Color = React.createClass({
  getInitialState() {
    return {backgroundColor: this.props.color, width: 3, height: 3}
  },
  render() {
    return (
      <div className="Color" style={this.state} onMouseOver={this.props.onMouseOver} onClick={this.props.onClick}></div>
      )
  },
})

export default Color;
