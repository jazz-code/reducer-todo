export const initalState = {
  Todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  console.log("todoReducer", state, action);

  return state;
};
