import React, { useState, useEffect } from "react";
import { fetchBack } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
    <div>
  <h1>You have taken your opponents back!</h1>
      <section>
        {props.moves.back.map((back) => {
          return (
            <div>
              <Link to={`/back/${back.id}`}>
                <h1> {back.name}</h1>
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
