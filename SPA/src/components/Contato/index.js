import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Contato extends Component{
  render(){
    return(
      <div className="home" id="contato">
        <h1>Entre em contato</h1>
        <h2>Telefone (99)9999-9999</h2>
        <h3>Rua 123, 7765</h3>
        <Link smooth to="#home" style={{color: '#fff'}}>HOME</Link>
      </div>
    );
  }
}

export default Contato;