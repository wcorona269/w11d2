import React from "react";

const allTodos = (state) =>({
  todos: Object.values(state.todos)
})

export default allTodos;