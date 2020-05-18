import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TakedownList from "./TakedownList.js";
import GuardList from "./GuardList.js";
import MountList from "./MountList.js";
import Sidemount from "./SidemountList.js";
import BackList from "./BackList.js";

const Review = () => {
  return (
    <div>
      <h1> Welcome to virtual Jiu Jitsu trainer</h1>

      
      <Link to="/simulation"><h3>Get on the mat</h3></Link>
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
          <Link to="/Mountlist">Mount</Link>
        </li>
        <li>
          <Link to="/Sidemountlist">Sidemount</Link>
        </li>
        <li>
          <Link to="/BackControl">Back</Link>
        </li>
      </ul>

      
    </div>
  );
};

export default Review;
