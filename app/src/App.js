import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Takedowns from './Takedowns.js'
import Guard from './Guard.js'
import Mount from './Mount.js'
import Sidemount from './Sidemount.js'
import Back from './Back.js'

function App() {
  return (
    <div className="App">
 <h1> Welcome to virtual Jiu Jitsu trainer</h1>

 <h3>Get on the mat</h3>
      {/* link */}

      <h3>Review Moves</h3>
      {/* //links/routes to components, takedowns/ mount/ guard/ escapes */}

    <Link to='/Takedowns'>Takedowns</Link>
    <Link to='/Guard'>Guard</Link>
    <Link to='/Mount'>Mount</Link>
    <Link to='/Sidemount'>Sidemount</Link>
    <Link to='/Back'>Back</Link>

    <Route path='/Takedowns' component={Takedowns}></Route>
    <Route path='/Guard' component={Guard}></Route>
    <Route path='/Mount' component={Mount}></Route>
    <Route path='/Sidemount' component={Sidemount}></Route>
    <Route path='/Back' component={Back}></Route>    
      
    
    </div>
  );
}

export default App;
