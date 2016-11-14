import React from 'react';
import './App.css';
import Color from './Color'

var ColorPicker = React.createClass({
  getInitialState() {
    return {colors: [], chosenColor: 'purple', overColor: 'purple'}
  },
  componentWillMount() {
    this.getColors()
  },
  toHex(num) {
    return num.toString(16);
  },
  nextId() {
      this.uniqueId = this.uniqueId || 0
      return this.uniqueId++
  },
  getColors() {
    var colors = []
    for(var r = 0; r < 255; r += 10){
      for(var g = 0; g < 255; g += 30){
        for(var b = 0; b < 255; b += 50){
            colors.push({id: this.nextId(), color: ('rgb('+r.toString()+', '+g.toString()+', '+b.toString()+')')})
        }      
      }
    }
    this.setState({colors: colors})
  },
  displayColorPicker() {
    return (
      <div className="Color-picker">
        <div className="Color-wrapper">{this.state.colors.map(this.eachColor)}</div>
            Current color: 
            <div className="Current-colors-box">
              <div className="Current-color" style={{backgroundColor: this.state.overColor, width: 80, height: 80}}></div>
              <div className="Current-color" style={{backgroundColor: this.state.chosenColor, width: 80, height: 80}}></div>
            </div>
            <input id="selectedColor" type="text" defaultValue={this.state.chosenColor} />
      </div>
    )
  },
  copyColor(color) {
    document.getElementById('selectedColor').value = color
    document.getElementById('selectedColor').focus()
    document.getElementById('selectedColor').select()
    document.execCommand('copy')
  },
  eachColor(color) {
      return (<Color key={color.id} id={color.id} color={color.color} onClick={() => this.update(color)} onMouseOver={() => this.swap(color)} />)
  },
  update(color) {
    this.setState({chosenColor: color.color})
    this.copyColor(color.color)
  },
  swap(color) {
    this.setState({overColor: color.color})    
  },
  componentDidUpdate() {

  },
  render() {
    return this.displayColorPicker()
  }
})

export default ColorPicker;
