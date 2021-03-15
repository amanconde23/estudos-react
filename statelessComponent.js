import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre 
        nome={props.nome} 
        cargo={props.cargo} 
        idade={props.idade} 
      />
      <Social 
        linkedin={props.linkedin}
        github={props.github}
      />
      <hr/>
    </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade}</h3>
    </div>
  );
}

const Social = (props) => {
  return (
    <div>
      <a href={props.linkedin}>Linkedin </a>
      <a href={props.github}>Github </a>
    </div>
  );
}

function App(){
  return (
    <div>
      <h1>Conheça a nossa equipe:</h1>
      <Equipe 
        nome="Amanda" 
        cargo="Programadora" 
        idade="29" 
        linkedin="https://www.linkedin.com/in/amanda-conde-martinez/" 
        github="http://github.com/amanconde23" 
      />
      <Equipe 
        nome="Daniela" 
        cargo="Professora" 
        idade="39" 
        linkedin="https://www.linkedin.com/in/amanda-conde-martinez/" 
        github="http://github.com/amanconde23" 
      />

    </div>
  );
}

export default App;