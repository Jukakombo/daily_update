import { combineReducers } from "redux";
import contacts from "./contacts";
import user from "./auth";

const reducers = combineReducers({
  contacts,
  user,
});

export default reducers;
