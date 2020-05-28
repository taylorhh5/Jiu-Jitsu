import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const TakedownList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  const [takedowns, setTakedowns] = useState([]);
  console.log(takedowns, "takedown component state");
  console.log(props.moves, "moves");

  useEffect(() => {
    setTakedowns(props.moves.moves);
  }, [props.moves]);

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
      <h1 className="h1title">You have chosen to take down your opponent!</h1>

      <h2>Choose the type of takedown you'd like to use.</h2>
      <section className="movelist-section">
        {props.moves.takedown.map((takedown) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/takedown/${takedown.id}`}>
              <img className="movelist-img"  src={takedown.image_url}  />

                <h1 className="movelist-name"> {takedown.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped takedowns */}
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
export default connect(mapStateToProps, { fetchTakedown })(
  withRouter(TakedownList)
);
