import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

const MSTP = (state) => ({
  // todos: allTodos(state)
  todos: Object.values(state.todos)
});

const MDTP = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(MSTP, MDTP)(TodoList);
