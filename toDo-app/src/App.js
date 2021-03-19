import React, {Component} from 'react';

import TodoList from './components/TodoList';
import './style.css'

class App extends Component{
  render() {
    return(
      <div className="container">
        <h1 className="page-title">TO DO LIST</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;