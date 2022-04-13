import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';
import { receiveTodo } from '../../actions/todo_actions';

const MSTP = (state) => ({
  todos: allTodos(state)
});

const MDTP = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(MSTP, MDTP)(TodoList);
