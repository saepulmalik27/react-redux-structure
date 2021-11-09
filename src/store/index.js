import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers"; 
import reduxPromise from 'redux-promise'
const store = createStore(
  rootReducer,
  applyMiddleware(reduxPromise)
)
export default store;