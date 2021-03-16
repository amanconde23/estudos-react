import React, { Component } from 'react';

class App extends Component{
  
  constructor (props){
    super(props);
    this.state = {
      form:{
        nome: '',
        email: '',
        senha: '',
      }
    }
    this.dadosForm = this.dadosForm.bind(this);
  }

  dadosForm(event){
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState(
      {
        form: form
      }
    )
  }


  render(){
    return(
      <div>
        <h1>Implementado Formulário</h1>

          <label>Nome: </label>
          <input 
            type="text"
            name="nome"
            value={this.state.form.nome}
            onChange={this.dadosForm}
          />
          
          <br/>

          <label>Email: </label>
          <input 
            type="email"
            name="email"
            value={this.state.form.email}
            onChange={this.dadosForm}
          />

          <br/>

          <label>Senha: </label>
          <input 
            type="password"
            name="senha"
            value={this.state.form.senha}
            onChange={this.dadosForm}
          />

          <p>{this.state.form.nome}</p>
          <p>{this.state.form.email}</p>
          <p>{this.state.form.senha}</p>
      </div>
    );
  }
}

export default App;