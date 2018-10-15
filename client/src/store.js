//redux
import { createStore, applyMiddleware, compose } from "redux";
//thunk
import thunk from "redux-thunk";
//root reducer -- index
import rootReducer from "./reducers";

//initialState
const initialState = {};

//middleware
const middleware = [thunk];

//set store -- reducer array--rootReducer, state obj, middleware with spread
// Developer tools middleware
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeSetup(applyMiddleware(...middleware))
);

export default store;
