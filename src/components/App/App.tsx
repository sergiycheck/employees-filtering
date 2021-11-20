import React from "react";
import "./App.scss";
import VisibleUserList from "../Users/VisibleUserList";
import { AlphabetElements } from "../FilterElements/FilterElements";
import { ActiveUserList } from "../Users/ActiveUsersList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlphabetElements />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <VisibleUserList />
            <div className="vertical-line"></div>
            <ActiveUserList />
          </div>
        </div>
      </main>
      <footer>
        <hr />
      </footer>
    </div>
  );
}

export default App;
