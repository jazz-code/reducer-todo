import React, { useReducer, useRef } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => state, []);
  return (
    <div className="App">
      <input ref={inputRef} />
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
