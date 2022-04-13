import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from './actions/step_actions';
import allTodos from './reducers/selectors';
import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;

  window.allTodos = allTodos;

  const Variable = () =>{
    return (
      <h1>It's not working</h1>
    )
  }
  ReactDOM.render(<Root store={store}/>, content);
});
