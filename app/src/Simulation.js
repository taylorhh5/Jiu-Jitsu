import React, { useState } from "react";
import { Link } from "react-router-dom";

const Simulation = () => {
  const [num, setNum] = useState();

  function randomNum() {
    setNum(Math.round(Math.random() *3) );
  }
  return (
    <div>
      <h1>Welcome to the simulation.</h1>
      <h3>
        You step onto the mat and shake your opponents hand. The match is about
        to begin. You have three options...
      </h3>
      <ol>
        <li>Take down your opponent </li>
        <li>Pull Guard</li>
        <li>Let them make the first move</li>
      </ol>
      <h3>What do you choose?</h3>
      <ul>
        <li>
          {" "}
          <Link to={`/takedowns`}>
            <h2> Take down your opponent</h2>
          </Link>
        </li>
        <li>
          {" "}
          <Link to={`/guardlist`}>
            <h2> Pull guard on your opponent</h2>
          </Link>
        </li>
        <li>
          {" "}
          <button onClick={randomNum}>
            <h2>Let your opponent make the first move</h2>
          </button>
        </li>
        {/* your opponent shoots in but you sprawl and land on top of them from here you spin and gain back control.
              Your opponent tries to take you down but you manage to get him in your guard.
              Math.random decide which one. Cmponent state changes based on which is picked. Onclick does htis. */}
                 <div>
      {(() => {
        if (num >= 2) {
          return (
            <div>        <h3>Your opponent tries to take you down but you manage to get them in your guard.Nice work!</h3>
            <Link to={`/backcontrol`}><h3>Go to guard moves</h3></Link></div>
          )
        } else if (num <2) {
          return (
            <div> <h3>
            Your opponent shoots and tries to take you down but you sprawl and land on top of them. From here you spin around and end up on the ground behind them Good work!.
          </h3>
          <Link to={`/mountlist`}><h3>Go to back control moves</h3></Link></div>
          )
        }
      })()}
    </div>

        <h1>{num}</h1>
   
   
      </ul>
    </div>
  );
};

export default Simulation;
