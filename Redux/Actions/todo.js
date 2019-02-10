const updateTodo = (data, index) => {
  return {
    type: "UPDATE_TODO",
    data,
    index
  };
};

const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};

const addTodo = data => {
  return {
    type: "ADD_TODO",
    data
  };
};

const doneTodo = (data, index) => {
  return {
    type: "DONE_TODO",
    data,
    index
  };
};

export { addTodo, updateTodo, removeTodo, doneTodo };
