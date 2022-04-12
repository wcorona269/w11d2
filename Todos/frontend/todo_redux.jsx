import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import React from "react";
import ReactDOM from "react-dom";


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;

  const Variable = () =>{
    return (
      <h1>Todos App</h1>
    )
  }
  ReactDOM.render(<Variable />, content);
});