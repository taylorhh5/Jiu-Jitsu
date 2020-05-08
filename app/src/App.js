import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Takedowns from "./Takedowns.js";
import Guard from "./Guard.js";
import Mount from "./Mount.js";
import Sidemount from "./Sidemount.js";
import Back from "./Back.js";
import Review from './Review.js'
import NavBar from './NavBar.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
     

      <Route exact path="/" component={Review}></Route>
      <Route path="/Takedowns" component={Takedowns}></Route>
      <Route path="/Guard" component={Guard}></Route>
      <Route path="/Mount" component={Mount}></Route>
      <Route path="/Sidemount" component={Sidemount}></Route>
      <Route path="/Back" component={Back}></Route>
    </div>
  );
}

export default App;
