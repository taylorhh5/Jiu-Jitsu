import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import TakedownList from "./TakedownList.js";
import Takedown from "./Takedown.js";
import GuardList from "./GuardList.js";
import Guard from "./Guard.js";
import MountList from "./MountList.js";
import Mount from "./Mount.js";
import SidemountList from "./SidemountList.js";
import Sidemount from "./Sidemount.js";
import Back from "./Back.js";
import BackList from "./BackList.js";
import Review from "./Review.js";
import NavBar from "./NavBar.js";
import Simulation from "./Simulation.js";
import OpponentMove from "./OpponentMove.js";
import PostMove from "./PostMove.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import EditMove from "./EditMove.js";
import DeleteMove from "./DeleteMove.js";
import PrivateRoute from "./utils/PrivateRoute.js";
import Home from './Home.js'
function App(props) {

  const [navShow, setnavShow] = useState(true)

  console.log(props,"propsinapp")
   const token = localStorage.getItem("token")

// console.log (token,"token")
//   useEffect(() => {
//     if (token === null){
//       setnavShow(false)
//     }else{
//       setnavShow(true)
//     }
//   }, [window.location.pathn]);
  return (
    <div className="App">

     <NavBar />

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/review" component={Review}></Route>

      <Route path="/Takedowns" component={TakedownList}></Route>
      {/* <Route
        path=
        render={props => {
          return <Takedown {...props} />;
        }}
      /> */}
      <Route path="/takedown/:id" component={Takedown}></Route>
      <Route path="/guard/:id" component={Guard}></Route>
      <Route path="/mount/:id" component={Mount}></Route>
      <Route path="/back/:id" component={Back}></Route>
      <Route path="/sidemount/:id" component={Sidemount}></Route>
      <Route path="/simulation" component={Simulation}></Route>
      <Route path="/opponentmove" component={OpponentMove}></Route>

      <PrivateRoute path="/postmove" component={PostMove} />
   

      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <PrivateRoute path="/profile" component={Profile}/>
      <PrivateRoute path="/edit/:id" component={EditMove}/>
      <Route path="/delete/:id" component={DeleteMove}></Route>
      {/* <Route path="/navbar" component={NavBar}></Route> */}

      <Route path="/guardlist" component={GuardList}></Route>
      <Route path="/Mountlist" component={MountList}></Route>
      <Route path="/SidemountList" component={SidemountList}></Route>
      <Route path="/BackControl" component={BackList}></Route>
    </div>
  );
}

export default App;
