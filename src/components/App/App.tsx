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
        <VisibleUserList />
        <hr />
        <ActiveUserList />
      </main>
    </div>
  );
}

export default App;
