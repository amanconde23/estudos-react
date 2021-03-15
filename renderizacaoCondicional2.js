import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: false
    }
    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  sair(){
    this.setState(
      {status: false}
    )
  }

  entrar(){
    this.setState(
      {status: true}
    )
  }

  render(){
    return(
      <div>
        {
          // se for verdadeiro
          this.state.status ?
          <div>
            <h2>Bem vindo ao sistema</h2>
            <button
              onClick={this.sair}
            >
              Sair
            </button>
          </div>
          // se for falso
          :
          <div>
            <h2>Olá visitante, faça login:</h2>
            <button
              onClick={this.entrar}
            >
              Fazer login
            </button>
          </div>
        }
      </div>
    );
  }
}

export default App;