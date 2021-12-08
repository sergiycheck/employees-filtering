import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./components/Users/usersSlice";

store.dispatch(fetchUsers(100));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
