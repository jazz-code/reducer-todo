import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = props => {
  const [state, dispatch] = useReducer(initialState, todoReducer);
  console.log("todoList", state);

  return (
    <div>
      <ul>
        {state.todos.map(items => (
          <li key={items.id}>{items.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
