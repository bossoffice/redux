import couterReducer from "./couterReducer";
import todoReducer from "./todoReducer/todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  couter: couterReducer,
  todo: todoReducer,
});

export default rootReducer;
