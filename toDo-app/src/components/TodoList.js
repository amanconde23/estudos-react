import React, { Component } from 'react';

import TodoItems from '../components/TodoItems';

class TodoList extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      tarefa: '',
      items: []
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addItem(ev){
    let state = this.state;
    if(this._tarefaInput.value !== ''){
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };
      this.setState(
        {
          items: [
            ...state.items,
            newItem
          ]
        }
      )
    }
    ev.preventDefault();
    // depois de adicionar tarefa, limpa input tarefa
    this.setState(
      {
        tarefa: ''
      }
    )
  }

  deleteItem(key){
    // filtro retorna somente os itens com key diferente da do item clicado
    let filtro = this.state.items.filter(
      (item) => {
        return (item.key !== key)
      }
    )
    this.setState(
      {
        items: filtro
      }
    )
  }

  render(){
    return(
      <div>
        <form className="input-task-form" onSubmit={this.addItem}>
          <input 
            type="text"
            placeholder="type your task"
            name="tarefa"
            value={this.state.tarefa}
            onChange={
              (event) => {this.setState(
                {
                  tarefa: event.target.value
                }
              )}
            }
            ref={(e) => this._tarefaInput = e}
          />

          <button type="submit">
            Submit
          </button>
        </form>

        <TodoItems 
          lista={this.state.items}
          delete={this.deleteItem}
        />
      </div>
    );
  }
}

export default TodoList;