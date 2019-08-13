export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  //   console.log("todoReducer", state);
  switch (action.type) {
    case "DISPLAY_TODO":
      return {
        ...state,
        item: action.item
      };
      console.log("state", state.item);
    default:
      return state;
  }
};
