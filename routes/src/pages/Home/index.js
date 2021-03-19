import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <div>
        <h2>PÁGINA HOME</h2>
        <Link to="/sobre">SOBRE</Link>
      </div>
    );
  }
}

export default Home;