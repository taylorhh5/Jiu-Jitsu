import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TakedownList from "./TakedownList.js";
import GuardList from "./GuardList.js";
import Mount from "./Mount.js";
import Sidemount from "./Sidemount.js";
import Back from "./Back.js";

const Review = () => {
  return (
    <div>
      <h1> Welcome to virtual Jiu Jitsu trainer</h1>

      <h3>Get on the mat</h3>
      {/* link */}

      <h3>Review Moves</h3>
      {/* //links/routes to components, takedowns/ mount/ guard/ escapes */}
      <ul>
        <li>
          <Link to="/Takedowns">Takedowns</Link>
        </li>
        <li>
          <Link to="/guardlist">Guard</Link>
        </li>
        <li>
          <Link to="/Mount">Mount</Link>
        </li>
        <li>
          <Link to="/Sidemount">Sidemount</Link>
        </li>
        <li>
          <Link to="/Back">Back</Link>
        </li>
      </ul>
    </div>
  );
};

export default Review;
