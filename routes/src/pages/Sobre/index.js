import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>PÁGINA SOBRE</h2>
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

export default Sobre;