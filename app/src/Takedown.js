import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import "./MoveList.scss"


const TakedownCard = (props) => {
  console.log(props, "props in single");

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenTakedown = props.moves.takedown.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(chosenTakedown, "params");


  return (
    <div>
      <section >
        {chosenTakedown.map((takedown) => {
          return (
            <div key={takedown.id}>
              <h2>{takedown.name}</h2>
   <img src={takedown.image_url}  />
              <p>{takedown.description}</p>

           
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
export default connect(mapStateToProps, { fetchTakedown })(
  withRouter(TakedownCard)
);
