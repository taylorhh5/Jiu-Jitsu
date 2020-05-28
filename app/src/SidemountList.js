
import React, { useState, useEffect } from "react";
import { fetchSidemount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const SidemountList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchSidemount();
  }, []);

  const [sidemount, setsidemount] = useState([]);
  console.log(sidemount, "sidemount component state");
  console.log(props.moves, "moves");

  useEffect(() => {
    setsidemount(props.moves.moves);
  }, [props.moves]);

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
             <h1 className="h1title">You have side control of your opponent!</h1>
             <h2>Choose your move...</h2>
      <section className="movelist-section">
        {props.moves.sidemount.map((sidemount) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/sidemount/${sidemount.id}`}>
                <h1 className="movelist-name"> {sidemount.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped sidemount */}
      {/* post- get userid from local storage, saved from sign in */}
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
export default connect(mapStateToProps, { fetchSidemount })(
  withRouter(SidemountList)
);
