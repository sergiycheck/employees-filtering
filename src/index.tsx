import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./components/App/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./components/Users/usersSlice";

store.dispatch(fetchUsers(5));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
