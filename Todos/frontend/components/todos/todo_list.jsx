import React from 'react';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
  // debugger
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
          {
            props.todos.map((todo) => {return (
            <li key={todo.id}>Title: {todo.title} Body: {todo.body}
           
                <button onClick={toggleDone(todo)}>{(todo.done === 'true') ? 'Done' : 'unDone'}</button>

                <form onSubmit={removeTodo(todo)}>
                <input type="submit" value="Delete" />
                </form>
             </li>
            )})
          }
      </ul>
      <TodoForm receiveTodo = {props.receiveTodo} />
    </div>
  )
}

const toggleDone = (todo) =>{
  receiveTodo(todo)
} 




export default TodoList;