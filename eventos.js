// APP

import React, { Component } from 'react';
// nomeando um componente como index, vc só chama a pasta
import Membro from './components/Membro'

class App extends Component{

  render(){
    return(
      <div>
        <Membro 
          nome="Visitante"
        />
      </div>
    );
  }
}

export default App;

// COMPONENTE

import React, { Component } from 'react';

class Membro extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: props.nome
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState(
      {nome: nome}
    )
  }

  render(){
    return(
      <div>
        <h2>Bem vindo(a) {this.state.nome}</h2>
        <button
          onClick={ () => this.entrar(
            'Amanda'
          )}
        >
          Entrar como Amanda
        </button>
        <button
          onClick={ () => this.setState(
              {nome: ''}
          )}
        >
          Sair
        </button>
      </div>
    );
  }
}

export default Membro;