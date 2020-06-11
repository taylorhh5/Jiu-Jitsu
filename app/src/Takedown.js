import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import "./MoveCard.scss"


const TakedownCard = (props) => {

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenTakedown = props.moves.takedown.filter(
    (data) => `${data.id}` === props.match.params.id
  );


  return (
    <div>
      <section className="move-card-section" >
        {chosenTakedown.map((takedown) => {
          return (
            <div className="move-card-div" key={takedown.id}>
              <h1 className="move-card-name">{takedown.name}</h1>
   <img className="move-card-img" src={takedown.image_url}  />
              <p className="move-card-description" >{takedown.description}</p>

           
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
