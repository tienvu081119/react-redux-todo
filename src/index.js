import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { ToDoApp } from './components/ToDoApp';
// Store
import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';
const store = createStore(myReducer);

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  
  document.querySelector('#root')
);