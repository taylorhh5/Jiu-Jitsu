import React, { useState, useEffect } from "react";
import { fetchBack } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Back = (props) => {
  console.log(props, "props in single");

  useEffect(() => {
    props.fetchBack();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenBack = props.moves.back.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(chosenBack, "params");

  return (
    <div>
      <section>
        {chosenBack.map((back) => {
          return (
            <div key={back.id}>
              <h2>{back.name}</h2>

              <p>{back.description}</p>

              <img src={back.image_url}  />
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
export default connect(mapStateToProps, { fetchBack })(
  withRouter(Back)
);
