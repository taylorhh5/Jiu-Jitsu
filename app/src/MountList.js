
import React, { useState, useEffect } from "react";
import { fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

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
    <div>
             <h1>You have your opponent in mount!</h1>
             <h2>Choose your move...</h2>

      <section>
        {props.moves.mount.map((mount) => {
          return (
            <div>
              <Link to={`/mount/${mount.id}`}>
                <h1> {mount.name}</h1>
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
