import React, { useState, useEffect } from "react";
import { fetchGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
    <div>
         <h1>You have your opponent in guard!</h1>
            <p>Explain guard overview</p>
      <section>
        {props.moves.guard.map((guard) => {
          return (
            <div>
              <Link to={`/guard/${guard.id}`}>
                <h1> {guard.name}</h1>
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
