import React, { Component } from 'react';

import ToDoForm from './ToDoForm';
import  ToDoList  from './ToDoList';

export class ToDoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.getToDos(),
      filterCriteria: 'all'
    };

    this.filterToDos = this.filterToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  filterToDos(filterCriteria) {
    this.setState({ filterCriteria });
  }

  addToDo(description) {
    let todos = this.getToDos();

    todos.push({
      id: this.getNextId(todos),
      description,
      status: 'uncompleted'
    });

    this.saveToDos(todos);
  }

  toggleStatus(id) {
    let todos = this.getToDos();
    let todo = todos.find(td => td.id === id);

    if (todo != null) {
      todo.status = todo.status === 'completed' ? 'uncompleted' : 'completed';

      this.saveToDos(todos);
    }
  }

  removeToDo(id) {
    let todos = this.getToDos();
    let todo = todos.find(td => td.id === id);

    if (todo != null) {
      let idx = todos.indexOf(todo);
      todos.splice(idx, 1);

      this.saveToDos(todos);
    }
  }

  render() {
    let todos = this.state.todos;
    let criteria = this.state.filterCriteria;

    if (criteria !== 'all') {
      todos = todos.filter(todo => todo.status === criteria);
    }

    return (
      <>
        <header>
          <h1>Todo App</h1>
        </header>

        <ToDoForm onFilterToDos={this.filterToDos} onAddToDo={this.addToDo} />

        <ToDoList 
          onToggleStatus={this.toggleStatus} onRemoveToDo={this.removeToDo} />
      </>
    );
  }

  getNextId(todos) {
    if (todos.length === 0) {
      return 1;
    }

    let ids = todos.map(todo => todo.id);

    return Math.max(...ids) + 1;
  }

  saveToDos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({ todos: this.getToDos() });
  }

  getToDos() {
    let todos = JSON.parse(localStorage.getItem("todos"));

    return todos || [];
  }
}