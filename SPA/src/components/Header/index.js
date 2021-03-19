import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component{
  render(){
    return(
      <header>
        <div className="menu" id="home">
          <nav>
            <ul>
              <li><Link smooth to="#home">HOME</Link></li>
              <li><Link smooth to="#sobre">SOBRE</Link></li>
              <li><Link smooth to="#contato">CONTATO</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;