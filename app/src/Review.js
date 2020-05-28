import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TakedownList from "./TakedownList.js";
import GuardList from "./GuardList.js";
import MountList from "./MountList.js";
import Sidemount from "./SidemountList.js";
import BackList from "./BackList.js";
import PostMove from './PostMove.js'
import "./Review.scss"
import gicrop from './images/gicrop.jpg'
import gi from './images/gi.jpg'
import gicool from './images/gicool.jpg'
import gibig from './images/gibig.jpg'
import gidrama from './images/gidrama.jpg'
import gismall from './images/gismall.jpg'
import gooriginal from './images/gooriginal.jpg'
import gismalls from './images/gismalls.jpg'
import gismallbr from './images/gismallbr.jpg'









const Review = () => {
  return (
    <div className="review-container">
      <div className="review-left">
    

      <h3 className="left-title">Review Moves</h3>
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

      <div className="review-center">
      <h1>Welcome to the virtual Jiu-Jitsu Trainer.</h1>
      <Link to="/simulation">
      <img src={gismallbr} alt="A BJJ gi" />
      </Link>
<Link to="/simulation"><h3>Get on the mat</h3></Link>


      </div>
      <div className="review-right">
        <h2>Want to contribute?</h2>
        <p>Add your own move.</p>
      {/* <h2> You can add your own move <Link to="/postmove">here.</Link></h2> */}
      <PostMove/>
      </div>
      </div>
      
  );
};

export default Review;
