import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UserList from "../Users/UserList";
import { AlphabetElements } from "../FilterElements/FilterElements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlphabetElements />
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/:filter?" component={UserList}></Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
