import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OpponentMove.scss"
import bjjroll from './images/bjjroll2.jpg'

const OpponentMove = () => {
  const [num, setNum] = useState((Math.random()*4 ));


  return (
    <div>
      {/* <h1>{num}</h1> */}
      <div className="oppo-container">
      <img className="sim-img" src={bjjroll} alt="A man in a BJJ gi" />

        {(() => {
          if (num <1) {
            return (
              <div>
                {" "}
                <h2>
                  Your opponent tries to take you down but you manage to get
                  them in your guard. Nice work!
                </h2>
                <Link to={`/guardlist`}>
                  <h2>Go to guard moves</h2>
                </Link>
                
                <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over.</h3>
              </div>
            );
          } else if (num >1 && num <2) {
            return (
              <div>
                {" "}
                <h2>
                  Your opponent shoots and tries to take you down but you sprawl
                  and land on top of them. From here you spin around and end up
                  on the ground behind them. Good work!
                </h2>
                <Link to={`/backcontrol`}>
                  <h2>Go to moves to use in back control</h2>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over.</h3>
                
                
              </div>
            );
          }
          else if (num > 2 && num <3) {
            return (
              <div>
                {" "}
                <h2>
                  Your opponent shoots in and tries to take you down but they lose their balance and you end up on top of them in side control. Nice!
                </h2>
                <Link to={`/sidemountlist`}>
                  <h2>Go to moves to use in side control</h2>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over.</h3>
                
                
              </div>
            );
          }
          else if (num >3) {
            return (
              <div>
                {" "}
                <h2>
                  Your opponent tries to pull you into their guard but instead you land directly on top of them in mount. Great work!
                </h2>
                <Link to={`/mountlist`}>
                  <h2>Go to moves to use in mount</h2>
                </Link>

              
                  <h3>Or if you don't like where you've ended up, you can always <Link to={`/simulation`}>TAP OUT</Link> and start over.</h3>
                
                
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default OpponentMove;
