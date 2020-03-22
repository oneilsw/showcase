import React, { Component } from 'react';
import GreetingBanner from '../Components/GreetingBanner'
import TicketSaleBanner from '../Components/TicketSaleBanner'
import ArtistBanner from '../Components/ArtistBanner'
import CountdownBanner from '../Components/CountdownBanner'

export class MainContainer extends Component {
  render() {
    return (
      <div>
        <div>    
      <GreetingBanner />
    </div>

    <section >
      <div id="tickets">
        <TicketSaleBanner />
      </div>
    </section>
    

    <section >
      <div id="artists">
        <ArtistBanner />
      </div>
    </section>

    <div>
      <CountdownBanner />
    </div>
      </div>
    );
  }
}

export default MainContainer;
