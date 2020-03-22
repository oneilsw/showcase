import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react'
import '../App.css'

export class TicketSaleBanner extends Component {

  buyTicket = () => {
    console.log("clicked"); 
  }


  render() {
    return (
      <div className='App' 
        style={{backgroundColor: 'black'}}
        // style={{backgroundImage: './Images/beat.jpg'}}
      >
        <h1 style={{color: 'purple'}}>TICKETS NOW ON SALE</h1>
        <Button 
          content="BUY TICKETS"
          color="purple"
          onClick={this.buyTicket}
        />
        <br/><br/>
      </div>
    );
  }
}

export default TicketSaleBanner;
