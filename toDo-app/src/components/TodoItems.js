import React, { Component } from 'react';

import imgDeleteBtn from '../assets/img/delete-button.png'

class TodoItems extends Component{

  constructor(props){
    super(props);
    this.state = {}

    this.delete = this.delete.bind(this);
  }

  delete(key){
    this.props.delete(key);
  }

  render(){
    return(
      <div className="tasks-list">
        <ul className="to-do-list">
          {this.props.lista.map((item) => {
            return(
              <li className="task-item">
                {item.text}
                <img 
                  src={imgDeleteBtn} alt="botão deletar tarefa"
                  onClick={
                    () => this.delete(item.key)
                  }
                  key={item.key}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItems;