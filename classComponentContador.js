import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Amanda',
      contador: 0
    }
    // permite que funcao seja acessada
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador += 1;
    state.nome = "Aumentando"
    this.setState(state);
  }

  diminuir(){
    let state = this.state;
    if(state.contador === 0){
      alert('Contador zerou!');
      return;
    }
    state.contador -= 1;
    state.nome = "Diminuindo"
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button
            onClick={this.diminuir}
          >
            -
          </button>
          {this.state.contador}
          <button
            onClick={this.aumentar}
          >
            +
          </button>
        </h3>
      </div>
    );
  }
}

export default App;