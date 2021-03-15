import React, { Component } from 'react';

// class component
class Equipe extends Component{
  render (){
    return (
      // precisa ter uma div q engloba, senao da erro
      <div>
        <Sobre 
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
        <hr/>
      </div>
    );
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá! Sou o (a) {this.props.nome}</h2>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade}</h3>
      </div>
    );
  }
}

function App(){
  return (
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Equipe 
        nome="Amanda" 
        cargo="Programadora Front-end" 
        idade="29"
      />
    </div>
  );
}

export default App;