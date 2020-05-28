import React, { useState, useEffect } from "react";
import { fetchGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"


const GuardList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchGuard();
  }, []);

  const [guard, setGuard] = useState([]);
  console.log(guard, "guard component state");
  console.log(props.moves, "moves");

  useEffect(() => {
    setGuard(props.moves.moves);
  }, [props.moves]);

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
         <h1 className="h1title">You have your opponent in guard!</h1>
            <p>Explain guard overview</p>
            <h2>Choose your move...</h2>

      <section className="movelist-section">
        {props.moves.guard.map((guard) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/guard/${guard.id}`}>
                <h1 className="movelist-name"> {guard.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped guard */}
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
export default connect(mapStateToProps, { fetchGuard })(
  withRouter(GuardList)
);
