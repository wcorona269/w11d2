// $.ajax({
//   method: 'GET',
//   url: '/api/todos'
// }).then(
//   todos => console.log(todos),
//   error => console.log(error)
// );

// import { $CombinedState } from "redux"

const fetchTodos = () =>{
  return $.ajax({
      method: 'GET',
      url: '/api/todos',
  })
}

export default fetchTodos;


