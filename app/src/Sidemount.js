import React, { useState, useEffect } from "react";
import { fetchSidemount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./MoveCard.scss"


const Sidemount = (props) => {
  console.log(props, "props in single");

  useEffect(() => {
    props.fetchSidemount();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosensidemount = props.moves.sidemount.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(chosensidemount, "params");

  return (
    <div>
      <section className="move-card-section">
        {chosensidemount.map((sidemount) => {
          return (
            <div className="move-card-div" key={sidemount.id}>
              <h1 className="move-card-name">{sidemount.name}</h1>
   <img className="move-card-img" src={sidemount.image_url}  />
              <p className="move-card-description">{sidemount.description}</p>

           
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
export default connect(mapStateToProps, { fetchSidemount })(
  withRouter(Sidemount)
);
