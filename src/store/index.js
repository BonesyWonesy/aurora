// src/store/index.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import exampleReducer from "./reducers/example";

const rootReducer = combineReducers({
  exampleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
