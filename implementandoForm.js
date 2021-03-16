import React, { Component } from 'react';

class App extends Component{
  
  constructor (props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
    this.cadastrar = this.cadastrar.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  cadastrar(event){
    const {
      nome,
      email,
      senha
    } = this.state;

    if(nome !== '' && email !== '' && senha !== ''){
      alert(
        `
          Nome: ${nome} 
          Email: ${email} 
          Senha: ${senha}
        `
      )
    } else {
      this.setState(
        {
          error: 'Favor, preencher todos os dados!'
        }
      )
    }
    // impede de atualizar
    event.preventDefault();
  }

  setNome(event){
    let nomeDigitado = event.target.value;
    this.setState(
      {
        nome: nomeDigitado
      }
    )
  }

  setEmail(event){
    let emailDigitado = event.target.value;
    this.setState(
      {
        email: emailDigitado
      }
    )
  }
  
  setSenha(event){
    let senhaDigitada = event.target.value;
    this.setState(
      {
        senha: senhaDigitada
      }
    )
  }

  render(){
    return(
      <div>
        <h1>Implementado Formulário</h1>

        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input 
            type="text"
            name="nome"
            value={this.setState.nome}
            onChange={this.setNome}
          />
          
          <br/>

          <label>Email: </label>
          <input 
            type="email"
            name="email"
            value={this.setState.email}
            onChange={this.setEmail}
          />

          <br/>

          <label>Senha: </label>
          <input 
            type="password"
            name="senha"
            value={this.setState.senha}
            onChange={this.setSenha}
          />

          <br/>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;