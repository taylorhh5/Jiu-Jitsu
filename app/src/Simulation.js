import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Simulation.scss";
import jjopponent from "./images/jjopponent.jpg";

const Simulation = () => {
  return (
    <div className="sim-container">
      <h1 className="sim-title">Training begins now.</h1>
      <img className="sim-img" src={jjopponent} alt="A man in a BJJ gi" />

      <div className="sim-intro-container">
        <h3 className="sim-intro">
          You step onto the mat and shake your opponents hand. The match is
          about to begin. You have three options...
        </h3>

        <div className="sim-move-container">
          {/* <div className="sim-move"> */}

          <Link className="sim-a" to={`/takedowns`}>
            <h2> I want to take down my opponent.</h2>
          </Link>

          <Link className="sim-a" to={`/guardlist`}>
            <h2> I want to pull guard on my opponent.</h2>
          </Link>

          <Link className="sim-a" to={`/opponentmove`}>
            <h2>I want to let my opponent make the first move.</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
