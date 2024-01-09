import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import contacts from "./reducers/contacts";


const reducer = combineReducers({

  contacts: contacts,
 
});




const store = createStore(
  reducer,
  compose(applyMiddleware(thunk))
);

export default store;
