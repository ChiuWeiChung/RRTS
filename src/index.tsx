import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

import App from "./component/App";

const store = createStore(reducers, applyMiddleware(thunk));

// =========================Functional Component========================
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>;
// };
// =========================Class App========================

// interface AppState {
//   counter: number;
// }

ReactDOM.render(
  <Provider store={store}>
    <App color="red" />
  </Provider>,
  document.getElementById("root")
);
