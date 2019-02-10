// combine all the reducers here and export it
import { combineReducers } from "redux";
import todoReducer from "./Reducers/todo";
export default combineReducers({
  todoReducer
});
