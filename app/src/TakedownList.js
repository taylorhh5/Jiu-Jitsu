import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const TakedownList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  const [takedowns, setTakedowns] = useState([]);
  console.log(takedowns, "takedown component state");
  console.log(props.moves.moves, "moves");

  useEffect(() => {
    setTakedowns(props.moves.moves);
  }, [props.moves]);

  // if (props.loading) {
  //   return <h1>Loading...</h1>
  // }
  return (
    <div>
      <h1>You have chosen to take down your opponent!</h1>
      <h2>Choose your takedown.</h2>
      <section>
        {props.moves.moves.map((takedown) => {
          return (
            <div>
              <Link to={`/takedown/${takedown.id}`}>
                <h1>name</h1>
                {takedown.name}
                <h1>n</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* <section>
        {props.moves.moves.map((item) => (
          <Takedown key={item.id} item={item} />
        ))}
      </section>
      {props.moves.moves.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))} */}

      {/* list of mapped takedowns */}
      {/* post- get userid from local storage, saved from sign in */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moves: state.reducer,
    // loading: state.loading,
    // error: state.error
  };
};
export default connect(mapStateToProps, { fetchTakedown })(
  withRouter(TakedownList)
);
