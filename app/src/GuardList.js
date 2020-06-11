import React, { useState, useEffect } from "react";
import { fetchGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"


const GuardList = (props) => {
  console.log(props, "propsin");

  useEffect(() => {
    props.fetchGuard();
  }, []);

  const [guard, setGuard] = useState('');



  const handleChange = event => {
    setGuard(event.target.value)
  }

  const filteredGuard = props.moves.guard.filter(item =>
    item.name.toLowerCase().includes(guard.toLowerCase())
  )

  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
         <h1 className="h1title">You have your opponent in guard!</h1>
            <p>Explain guard overview</p>

            <input
          className='search-input'
          type='text'
          name='takedown.name'
          value={filteredGuard.name}
          onChange={handleChange}
          placeholder='Search Takedowns'
        />
            <h2>Choose your move...</h2>

      <section className="movelist-section">
        {filteredGuard.map((guard) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/guard/${guard.id}`}>
                <h1 className="movelist-name"> {guard.name}</h1>
              </Link>
            </div>
          );
        })}
      </section>

      {/* list of mapped guard */}
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
export default connect(mapStateToProps, { fetchGuard })(
  withRouter(GuardList)
);
