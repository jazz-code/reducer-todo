import React, { useReducer, useRef } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: Date.now(),
            name: action.name
          }
        ];
      case "remove":
        return state.filter((item, index) => index != action.index);
      default:
        return state;
    }
  }, []);

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
      Add a Todo
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Enter a Todo" />
        <button>Submit</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={
                //dispatch an action called "remove" at the index of the item
                () => dispatch({ type: "remove", index })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {/* <TodoForm />
      <TodoList /> */}
    </div>
  );
}

export default App;
