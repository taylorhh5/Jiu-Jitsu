import React, { useState, useEffect } from "react";
import { fetchBack } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const BackList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchBack();
  }, []);

  const [back, setback] = useState([]);
  console.log(back, "back component state");
  console.log(props.moves, "moves");

  useEffect(() => {
    setback(props.moves.moves);
  }, [props.moves]);

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container"> 
  <h1 className="h1title">You have taken your opponents back!</h1>
  <h2 >Choose your move...</h2>

      <section className="movelist-section">
        {props.moves.back.map((back) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/back/${back.id}`}>
                <h1 className="movelist-name"> {back.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped back */}
      {/* post- get userid from local storage, saved from sign in */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moves: state.reducer,
    loading: state.loading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchBack })(
  withRouter(BackList)
);
