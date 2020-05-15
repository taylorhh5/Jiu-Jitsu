import React, { useState, useEffect } from "react";
import { fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const MountCard = (props) => {
  console.log(props, "props in mount");

  useEffect(() => {
    props.fetchMount();
  }, []);

  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const chosenmount = props.moves.mount.filter(
    (data) => `${data.id}` === props.match.params.id
  );
  console.log(chosenmount, "params");

  return (
    <div>
      <section>
        {chosenmount.map((mount) => {
          return (
            <div key={mount.id}>
              <h2>{mount.name}</h2>
   <img src={mount.image_url}  />
              <p>{mount.description}</p>

           
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
