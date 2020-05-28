import React, { useState, useEffect } from "react";
import { fetchBack } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./MoveCard.scss"


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
      <section className="move-card-section">
        {chosenBack.map((back) => {
          return (
            <div className="move-card-div" key={back.id}>
              <h1 className="move-card-name">{back.name}</h1>
              <img className="move-card-img"src={back.image_url}  />

              <p className="move-card-description">{back.description}</p>

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
