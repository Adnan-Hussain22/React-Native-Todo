const reducer = (state = {}, action) => {
  let updatedState = { ...state };
  updatedState["todos"] = updatedState.todos ? updatedState.todos : [];
  switch (action.type) {
    case "ADD_TODO": {
      const { todos } = updatedState;
      updatedState.todos = [action.data, ...todos];
    }

    case "UPDATE_TODO": {
      const { todos } = updatedState;
      updatedState.todos = todos.filter((todo, index) => {
        const { data, todoIndex } = action;
        if (todoIndex === index) {
          return data;
        }
        return todo;
      });
    }

    case "REMOVE_TODO": {
      const { todos } = updatedState;
      updatedState.todos = todos.filter((todo, index) => index != action.id);
    }

    case "DONE_TODO": {
      const { todos } = updatedState;
      updatedState.todos = todos.filter((todo, index) => {
        if (index == action.id) {
          todo.done = action.data;
        }
        return todo;
      });
    }

    default: {
    }
  }
  return updatedState;
};

export default reducer;
