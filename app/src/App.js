import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TakedownList from './TakedownList.js'
import Takedown from './Takedown.js'
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
      <Route path="/Takedowns" component={TakedownList}></Route>
      <Route
        path="/takedown/:id"
        render={props => {
          return <Takedown {...props} />;
        }}
      />

      <Route path="/Guard" component={Guard}></Route>
      <Route path="/Mount" component={Mount}></Route>
      <Route path="/Sidemount" component={Sidemount}></Route>
      <Route path="/Back" component={Back}></Route>
    </div>
  );
}

export default App;
