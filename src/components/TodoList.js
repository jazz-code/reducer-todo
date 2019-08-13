import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(initialState, todoReducer);
  // console.log("todoList", state)

  return (
    <div>
      {/* <input
        className="todo-input"
        type="text"
        name="newItem"
       value={newItem}
       onChange={handleChange}
      /> */}
      <ul>
        {item.map(items => (
          <li key={items.id}>{items.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
