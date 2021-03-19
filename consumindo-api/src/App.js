import React, {Component} from 'react';

import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      dicasNutricionais: []
    }
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
      // fetch retorna uma response 
      .then((response) => response.json())
      // com sucesso, a response passa para json
      .then((json) => {
        let state = this.state;
        // popula array dicasNutricionais com conteudo do json
        state.dicasNutricionais = json;
        this.setState(state);
        console.log(json);
      })
  }

  render() {
    return(
      <div className="container">
        <header>
          <strong>Dicas React Nutri</strong>
        </header>

        {/* percorrer array dicasNutri */}
        {this.state.dicasNutricionais.map((item) => {
          return(
            <article 
              key={item.id} 
              className="post"
            >
              <strong className="postTitle">
                {item.titulo}
              </strong>
              <img src={item.capa} className="postImage" alt="imagem do post"/>
              <p className="postSubTitle">
                {item.subtitulo}
              </p>
              <a className="botaoLerPost" href="#">Ler</a>
            </article>
          )
        })}
      </div>
    );
  }
}

export default App;