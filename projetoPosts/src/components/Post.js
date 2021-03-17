import React from 'react';

import Comment from './Comment'

export default class Post extends React.Component{
  // eh executado toda vez que o post for instanciado
  constructor(props){
    // classe pai do react component que fara a tratativa das propriedades
    super(props);

    // eh um estado dentro do post que grava as variaveis do estado
    this.state = {
      comments: [],
      newCommentText: ''
    };
    // referencia escopo da funcao
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit(event){
    this.setState({
      // recebe todos os comentarios existentes mais novo comentarios criados
      comments: [
        ...this.state.comments,
        { text: this.state.newCommentText }
      ]
    });

    // limpar input do comentario
    this.setState({ newCommentText: '' });

    event.preventDefault();
  }

  handleTextChange(event){
    // altera o estado da aplicacao toda vez que o input receber um valor
    this.setState({ newCommentText: event.target.value })
  }

  render(){
    return(
      <div>
        <h2>
          {this.props.title}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input 
            value={this.state.newCommentText} 
            onChange={this.handleTextChange}
          />
          <button type="submit">Comentar</button>
        </form>

        {/* percorre todos os comentarios, retorna um index (a posicao no array de comentarios) e um comentario */}
        {this.state.comments.map((comment, index) => {
          // key precisa ser usada qdo o react se posicionar qdo estiver interando sobre componentes
          return <Comment key={index} text={comment.text} />
        })}

      </div>
    );
  }
}