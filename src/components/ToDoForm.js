import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as action from './../actions/index';

class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.toDoInputRef = React.createRef();

    this.filterToDos = this.filterToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  filterToDos(e) {
    this.props.onFilterToDos(e.target.value);
  }

  addToDo(e) {
    e.preventDefault();

    let description = this.toDoInputRef.current.value.trim();

    if (description) {
      // this.props.onAddToDo(this.toDoInputRef.current.value);
      this.props.onAddToDo(this.toDoInputRef.current.value);    
    }
  }

  render() {
    return (
      <form onSubmit={this.addToDo}>
        <input ref={this.toDoInputRef} type="text" className="todo-input" maxLength="40" />
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select" onChange={this.filterToDos}>
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state=>{
  return {

  }
}

const mapDispathToProps = (dispath, props) =>{
  return {
    onAddToDo : (todo)=>{
      dispath(action.addToDo(todo))
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(ToDoForm);