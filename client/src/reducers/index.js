import { combineReducers } from "redux";
import authReducer from "./auth";
import contacts from "./contacts";
import news from "./news";
import comments from "./comment";
import registrations from "./registrations";

const reducers = combineReducers({
  authReducer,
  registrations,
  contacts,
  news,
  comments,
});

export default reducers;
