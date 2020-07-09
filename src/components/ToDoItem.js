import React, { Component } from 'react';

export class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.toDoRef = React.createRef();

    this.state = {
      markForDelete: false
    };

    this.toggleStatus = this.toggleStatus.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  toggleStatus() {
    this.props.onToggleStatus(this.props.todo.id);
  }

  removeToDo() {
    this.setState({ markForDelete: true });
    this.toDoRef.current.addEventListener('animationend', () => {
      this.props.onRemoveToDo(this.props.todo.id);
    });
  }

  render() {
    let todo = this.props.todo;
    let classes = `todo ${todo.status === 'completed' ? 'completed' : ''} ${this.state.markForDelete ? 'fall' : ''}`;

    return (
      <div ref={this.toDoRef} className={classes} style={{ display: 'flex' }}>
        <li className="todo-item">
          {todo.description}
        </li>

        <button className="check-btn" onClick={this.toggleStatus}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={this.removeToDo}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}