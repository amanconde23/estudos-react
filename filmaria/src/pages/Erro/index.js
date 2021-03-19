import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component{
  render(){
    return(
      <div>
        <h2>Ops! Página não encontrada!</h2>
        <Link to="/">Voltar para HOME</Link>
      </div>
    );
  }
}

export default Erro;