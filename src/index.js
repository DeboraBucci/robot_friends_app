import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import App from "./containers/App";
import "./index.css";
import "tachyons";
import { searchRobots, requestRobots } from "./reducers";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
