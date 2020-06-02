import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Simulation.scss"

const Simulation = () => {

  
  return (
    <div className="sim-container">
      <h1 className="sim-title">Training begins now.</h1>
      {/* <p className="sim-description">Here you get to choose your choose your moves against your opponent.</p> */}

      <div className="sim-intro-container">
      <h3 className="sim-intro">

        You step onto the mat and shake your opponents hand. The match is about
        to begin. You have three options...
      </h3>
   
      {/* <h3 className="sim-choose">What do you choose?</h3> */}

      <div className="sim-move-container">
      <ul className="sim-move">
        <li>
          
          <Link to={`/takedowns`}>
            <h2> I want to take down my opponent.</h2>
            
          </Link>
        </li>
        <li>
          <Link to={`/guardlist`}>
            <h2> I want to pull guard on my opponent.</h2>
          </Link>
        </li>
        <li>
          {" "}
          {/* <button onClick={randomNum}> */}
          <Link to={`/opponentmove`}>
             <h2>I want to let my opponent make the first move.</h2>
          </Link>
        
          {/* </button> */}
        </li>
       

       
   
   
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Simulation;
