import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Search from "./components/Search";
import Saved from "./components/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
