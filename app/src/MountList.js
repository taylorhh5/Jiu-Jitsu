
import React, { useState, useEffect } from "react";
import { fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const MountList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchMount();
  }, []);

  const [mount, setMount] = useState([]);
  console.log(mount, "mount component state");
  console.log(props.moves, "moves");

  useEffect(() => {
    setMount(props.moves.moves);
  }, [props.moves]);

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
             <h1 className="h1title">You have your opponent in mount!</h1>
             <h2>Choose your move...</h2>

      <section className="movelist-section">
        {props.moves.mount.map((mount) => {
          return (
            <div  className="movelist-move">
              <Link className="movelist-link" to={`/mount/${mount.id}`}>
                <h1 className="movelist-name"> {mount.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped mount */}
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
export default connect(mapStateToProps, { fetchMount })(
  withRouter(MountList)
);
