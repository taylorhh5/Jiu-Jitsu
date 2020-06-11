import React, { useState, useEffect } from "react";
import { fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./MoveCard.scss"

const MountCard = (props) => {

  useEffect(() => {
    props.fetchMount();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenmount = props.moves.mount.filter(
    (data) => `${data.id}` === props.match.params.id
  );

  return (
    <div>
      <section className="move-card-section">
        {chosenmount.map((mount) => {
          return (
            <div className="move-card-div" key={mount.id}>
              <h1 className="move-card-name">{mount.name}</h1>
   <img className="move-card-img" src={mount.image_url}  />
              <p className="move-card-description">{mount.description}</p>

           
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
export default connect(mapStateToProps, { fetchMount })(
  withRouter(MountCard)
);
