import React, { useState, useEffect } from "react";
import { fetchGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Guard = (props) => {
  console.log(props, "props in single");

  useEffect(() => {
    props.fetchGuard();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenGuard = props.moves.guard.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(chosenGuard, "params");

  return (
    <div>
      <section>
        {chosenGuard.map((guard) => {
          return (
            <div key={guard.id}>
              <h2>{guard.name}</h2>

              <p>{guard.description}</p>

              <img src={guard.image_url}  />
            </div>
          );
        })}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moves: state.reducer,
    loading: state.loading,
    error: state.error
  };
};
export default connect(mapStateToProps, { fetchGuard })(
  withRouter(Guard)
);
