import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      status: 2
    }
  }

  render(){
    return(
      <div>
        {/* se for verdadeiro, renderiza h1 */}
        {
          this.state.status === 1 &&
          <h1>Bem-vindo ao sistema!</h1>
        }
        <div>
          <h2>Curso React</h2>
        </div>
      </div>
    );
  }
}

export default App;