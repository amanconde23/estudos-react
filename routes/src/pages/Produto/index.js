import React, { Component } from 'react';

class Produto extends Component{
  constructor(props){
    super(props);
    this.state ={
      id: ''
    }
  }

  componentDidMount(){
    // id correspondente ao recebido via parametro na rota
    const { id } = this.props.match.params;
    this.setState(
      {
        id: id
      }
    )
  }

  render(){
    return(
      <div>
        <h1>Produto {this.state.id}</h1>
      </div>
    );
  }
}

export default Produto;