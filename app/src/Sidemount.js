import React, { useState, useEffect } from "react";
import { fetchSidemount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";

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
      <section>
        {chosensidemount.map((sidemount) => {
          return (
            <div key={sidemount.id}>
              <h2>{sidemount.name}</h2>
   <img src={sidemount.image_url}  />
              <p>{sidemount.description}</p>

           
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
