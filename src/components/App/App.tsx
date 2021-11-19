import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import VisibleUserList from "../Users/VisibleUserList";
import { AlphabetElements } from "../FilterElements/FilterElements";
import { ActiveUserList } from "../Users/ActiveUsersList";

function Root() {
  return (
    <Router>
      <Switch>
        <Route path="/:filter?" component={App}></Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlphabetElements />
      </header>
      <main>
        <VisibleUserList />
        <hr />
        <ActiveUserList />
      </main>
    </div>
  );
}

export default Root;
