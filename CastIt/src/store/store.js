import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import ScreenIt from "./reducers/ScreenIt";

import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  ScreenIt: ScreenIt
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
