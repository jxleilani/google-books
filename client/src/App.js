import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Search from "./components/search/SearchBox";
import Saved from "./components/saved/Saved";
import SearchResults from "./components/search/SearchResults"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path={["/", "/search"]} component={Search} />
        <Route exact path={"/saved"} component={Saved} />
        <SearchResults />
      </div>
    </Router>
  );
}

export default App;
