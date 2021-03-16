import React, { Component } from 'react';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      sexo: 'Masculino'
    }
    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(event){
    let emailDigitado = event.target.value;
    this.setState(
      {
        email: emailDigitado
      }
    )
  }

  trocaSexo(event){
    let sexoSelecionado = event.target.value;
    this.state(
      {
        sexo: sexoSelecionado
      }
    )
  }

  render(){
    return(
      <div>
        <h1>Manipulando forms</h1>

        Email:
        <input 
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.trocaEmail}
        />

        <br/>

        Senha:
        <input 
          name="senha"
          type="password"
          value={this.state.senha}
          // funcao inline para capturar senha
          onChange={
            (event) => this.setState(
              {
                senha: event.target.value
              }
            )
          }
        />

        <br/>

        Sexo:
        <select
          name="sexo"
          value={this.state.sexo}
          onChange={this.trocaSexo}
        >
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <div>
          <h2>Valores capturados no form</h2>
          <p>{this.state.email}</p>
          <p>{this.state.senha}</p>
          <p>{this.state.sexo}</p>
        </div>
      </div>
    );
  }
}

export default App;