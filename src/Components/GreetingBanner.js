import React, { Component } from 'react';
import '../App.css'

export class GreetingBanner extends Component {
  render() {
    return (
      <div>
        <img src={require('../Images/guitar.jpg')} alt=""/>
      </div>
    );
  }
}

export default GreetingBanner;
