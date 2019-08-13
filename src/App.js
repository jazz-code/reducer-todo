import React, { useReducer, useRef } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => state, []);

  const handleSubmit = e => {
    e.preventDefault();
    //dispatch an action to add item to list
    // passes the value of the input
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    //resets form
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.nam}</li>
        ))}
      </ul>
      {/* <TodoForm />
      <TodoList /> */}
    </div>
  );
}

export default App;
