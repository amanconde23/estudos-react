// *************APP*************

import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: 1, username: "Daniela", curtidas: 10, comentarios: 0},
        {id: 2, username: "Amanda", curtidas: 30, comentarios: 43},
        {id: 3, username: "Sandra", curtidas: 1, comentarios: 12},
      ]
    }
  }

  render(){
    return(
      <div>
        {
          // map percorre a lista feed, e coloca todo conteudo dentro de item
          this.state.feed.map((item) => {
            return(
              <Feed 
                key={item.id}
                username={item.username}
                curtidas={item.curtidas}
                comentarios={item.comentarios}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

// *************COMPONENTE*************
import React, { Component } from 'react';

class Feed extends Component{
  render(){
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <p>
          {
            this.props.curtidas > 1 ?
              this.props.curtidas + " curtidas"
            :
              this.props.curtidas + " curtida"
          }
          {
            this.props.comentarios > 1 ?
              " / " + this.props.comentarios + " comentários"
            :
            " / " + this.props.comentarios + " comentário"
          }
          
        </p>
        <hr/>
      </div>
    );
  }
}

export default Feed;
