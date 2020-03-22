import React, { Component } from 'react';
import '../App.css'

export class ArtistBanner extends Component {
  render() {
    return (
      <div className='App'>
        <img src={require('../Images/beat.jpg')} alt=""/>
      </div>
    );
  }
}

export default ArtistBanner;
