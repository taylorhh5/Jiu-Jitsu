import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
const TakedownCard = (props) => {
  console.log(props, "props in single");

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  const paramsmove = props.moves.moves.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(paramsmove, "params");

  return (
    <div>
      <section>
        {paramsmove.map((takedown) => {
          return (
            <div>
              <h2>{takedown.name}</h2>
             
              <p>{takedown.description}</p>
              
              
              <img src={takedown.image_url} wrapped ui={false} />

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
    // loading: state.loading,
    // error: state.error
  };
};
export default connect(mapStateToProps, { fetchTakedown })(
  withRouter(TakedownCard)
);
