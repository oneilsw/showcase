import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import '../App.css'
export class NavBar extends Component {

  render() {

    return (
      <div>
        <Menu 
          stackable
          inverted 
          size='huge'
          fixed='top'
        >
          <Menu.Menu position='left'>
            <Menu.Item>
              <h2 className='nav-font'>THE SHOWCASE</h2>
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item>
              <h5 className='nav-font'>HOME</h5>
            </Menu.Item>

            <Menu.Item>
              <a href="#tickets"><h5 className='nav-font'>TICKETS</h5></a>
            </Menu.Item>

            <Menu.Item>
              <a href="#artists"><h5 className='nav-font'>ARTISTS</h5></a>
            </Menu.Item>

            <Menu.Item>
              <h5 className='nav-font'>CONTACT US</h5>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        
      </div>
    );
  }
}

export default NavBar;
