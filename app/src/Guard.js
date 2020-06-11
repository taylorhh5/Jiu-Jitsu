import React, { useState, useEffect } from "react";
import { fetchGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./MoveCard.scss";

const Guard = (props) => {

  useEffect(() => {
    props.fetchGuard();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>;
  }

  const chosenGuard = props.moves.guard.filter(
    (data) => `${data.id}` === props.match.params.id
  );

  return (
    <div>
      <section className="move-card-section">
        {chosenGuard.map((guard) => {
          return (
            <div className="move-card-div" key={guard.id}>
              <h1 className="move-card-name">{guard.name}</h1>
              <img className="move-card-img" src={guard.image_url} />
              <p className="move-card-description">{guard.description}</p>
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
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchGuard })(withRouter(Guard));
