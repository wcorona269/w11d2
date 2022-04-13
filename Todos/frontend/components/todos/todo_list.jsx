import React from 'react';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  return (
      <TodoForm receiveTodo = {props.receiveTodo} /> 
)}


export default TodoList;