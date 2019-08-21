import React, { useReducer, useRef, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import { TimelineLite, CSSPlugin } from "gsap/all";
// import { TweenMax } from "gsap";
// import TimelineMax from "gsap/TimelineMax";
// import TweenLite from "gsap/TweenLite";

import {Animated} from "react-animated-css";

import "./styles/App.scss";


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
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div className="App">
       {/* <button onClick={() => animation.play()}>Play</button>
       <button ref={element => {
            ref1 = element;
          }} onClick={() => animation.pause()}>Pause</button> */}
      <h1>Make a to-do list!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" ref={inputRef} placeholder="Enter a Todo" />
        <button className="btn-submit">Submit</button>
      </form>
      <ul className="list">
        {items.map((item, index) => (
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <li className="list-item" key={item.id}>
            {item.name}
            <button 
              className="btn-remove"
              
              onClick={
                //dispatch an action called "remove" at the index of the item
                
                () => dispatch({ type: "remove", index })
              }
            >
              Done
            </button>
          </li>  
          </Animated>
        ))}
      
      </ul>
     
      {/* <TodoForm />
      <TodoList /> */}
    </div>
    </Animated>
  );
}

export default App;
