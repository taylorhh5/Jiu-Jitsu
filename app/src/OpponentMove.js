import React, { useState } from "react";
import { Link } from "react-router-dom";

const OpponentMove = () => {
  const [num, setNum] = useState(Math.round(Math.random()*3 ));

 
  return (
    <div>
      <h1>{num}</h1>
      <div>
        {(() => {
          if (num ===0) {
            return (
              <div>
                {" "}
                <h3>
                  Your opponent tries to take you down but you manage to get
                  them in your guard.Nice work!
                </h3>
                <Link to={`/backcontrol`}>
                  <h3>Go to guard moves</h3>
                </Link>
                
                <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over</h3>
              </div>
            );
          } else if (num ===1) {
            return (
              <div>
                {" "}
                <h3>
                  Your opponent shoots and tries to take you down but you sprawl
                  and land on top of them. From here you spin around and end up
                  on the ground behind them. Good work!
                </h3>
                <Link to={`/mountlist`}>
                  <h3>Go to moves to use in back control</h3>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over</h3>
                
                
              </div>
            );
          }
          else if (num ===2) {
            return (
              <div>
                {" "}
                <h3>
                  Your opponent shoots in and tries to take you down but they lose their balance and you end up on top of them in side control. Nice!
                </h3>
                <Link to={`/side`}>
                  <h3>Go to moves to use in side control</h3>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over</h3>
                
                
              </div>
            );
          }
          else if (num ===3) {
            return (
              <div>
                {" "}
                <h3>
                  Your opponent tries to pull you into their guard but instead you land directly on top of them in mount. Great work!
                </h3>
                <Link to={`/mount`}>
                  <h3>Go to moves to use in mount</h3>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over</h3>
                
                
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default OpponentMove;
