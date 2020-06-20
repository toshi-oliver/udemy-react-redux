import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"; //storeを作成する
import { Provider } from "react-redux"; //作成したstoreを全コンポーネントに提供する
import thunk from "redux-thunk"; //middlewareに該当する
import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
