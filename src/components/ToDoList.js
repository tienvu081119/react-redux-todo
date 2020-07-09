import React, { Component } from 'react';
import { ToDoItem } from './ToDoItem';
import {connect} from 'react-redux';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  toggleStatus(id) {
    this.props.onToggleStatus(id);
  }

  removeToDo(id) {
    this.props.onRemoveToDo(id);
  }

  render() {
    console.log(1,this.props.todos);
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {
            this.props.todos.map(todo => (
              <ToDoItem key={todo.id} todo={todo}
                onToggleStatus={this.toggleStatus} onRemoveToDo={this.removeToDo} />
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {todos : state.todos}
}
export default connect(mapStateToProps,null)(ToDoList);