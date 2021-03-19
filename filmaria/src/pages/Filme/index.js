import React, { Component } from 'react';

import './filme-info.css';

class Filme extends Component{
  constructor(props){
    super(props);
    this.state = {
      filme: []
    }
  }

  componentDidMount(){
    // pegar id do parametro da url
    const { id } = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState(
          {
            filme: json
          }
        )
      })
  }

  render(){
    return(
      <div className="filme-info">
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} alt="Capa Filme" />
        {/* renderizacao condicional, feito isso para renderizar a palavra sinopse junto com o conteudo do filme */}
        {this.state.filme.length !== 0 &&
          <h3>Sinopse</h3>
        }
        {this.state.filme.sinopse}
      </div>
    );
  }
}
export default Filme;