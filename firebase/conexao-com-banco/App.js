import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
    };

    let firebaseConfig = {
      apiKey: "AIzaSyCVsxcS0TZW8aZz3lA-lvFzM-CTMCfv8UQ",
      authDomain: "reactapp-de337.firebaseapp.com",
      projectId: "reactapp-de337",
      storageBucket: "reactapp-de337.appspot.com",
      messagingSenderId: "577337932960",
      appId: "1:577337932960:web:9ceccff17fed3dd2ca9dc5"
    };
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
    }

  // o metodo on fica em real time buscando por atualizacoes
  //  firebase.database().ref('usuarios').child(1).child('nome').on('value', (snapshot) => {
  //    let state = this.state;
  //    state.nome = snapshot.val();
  //    this.setState(state);
  //  });

    firebase.database().ref('usuarios').child(1).once('value').then((snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });
  }

  render(){
    const { nome, idade } = this.state;
    return(
      <div>
        <h1>Nome: {nome}</h1>
        <h2>Idade: {idade}</h2>
      </div>
    );
  }
}