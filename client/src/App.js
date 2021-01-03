import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import SearchBox from "./components/search/SearchBox";
import SearchResults from "./components/search/SearchResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchBox />
        <SearchResults />
      </div>
    </Router>
  );
}

export default App;
