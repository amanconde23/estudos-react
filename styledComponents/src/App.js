import React, { Component } from 'react';

import { Container, Head, Titulo, BemVindo } from './styles';

class App extends Component{
  render() {
    return(
      <Container>
        <Head>
          <Titulo>Styled Components</Titulo>
        </Head>
        <BemVindo
          cor="282c34"
          tamanho={35}
        >
          Bem vindo(a) ao sistema!
        </BemVindo>
      </Container>
    );
  }
}

export default App;