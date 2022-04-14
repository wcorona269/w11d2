import React from 'react';
import TodoForm from '../todo_list/todo_form';

// const TodoList = (props) => {
//   // debugger
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//           {
//             props.todos.map((todo) => {return (
//             <li key={todo.id}>Title: {todo.title} Body: {todo.body}
//              </li>
//             )})
//           }
//       </ul>
//       <TodoForm receiveTodo = {props.receiveTodo} />
//     </div>
//   )
// }

// const toggleDone = (todo) =>{
//   receiveTodo(todo)
// } 

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }

componentDidMount() {
  this.props.fetchAllTodos();
}

render() {
  return (
    <div>
      <h1>All Teas</h1>
      <ul>
        {
          this.props.todos.map(todo => <li key={todo.id}>Title: {todo.title}</li>)
        }
      </ul>
      <TodoForm receiveTodo={this.props.receiveTodo}/>
    </div>
  )
}
}



export default TodoList;