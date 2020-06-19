import React, { useState, useEffect } from "react";
import { fetchTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const TakedownList = (props) => {

  useEffect(() => {
    props.fetchTakedown();
  }, []);

  const [takedowns, setTakedowns] = useState('');
 
  
  if (props.loading) {
    return <h1>Loading...</h1>
  }

  const handleChange = event => {
    setTakedowns(event.target.value)
  }

  const filteredTakedowns = props.moves.takedown.filter(item =>
    item.name.toLowerCase().includes(takedowns.toLowerCase())
  )

 
  return (
    <div className="list-container">
      <h1 className="h1title">You have chosen to take down your opponent!</h1>
      <input
          className='search-input'
          type='text'
          name='takedown.name'
          value={filteredTakedowns.name}
          onChange={handleChange}
          placeholder='Search Takedowns'
        />

      <h2>Choose the type of takedown you'd like to use.</h2>
      <section className="movelist-section">
        {filteredTakedowns.map((takedown) => {
          return (
            <div className="movelist-move">
              <Link className="movelist-link" to={`/takedown/${takedown.id}`}>

                <h1 className="movelist-name"> {takedown.name}</h1>
              </Link>
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
export default connect(mapStateToProps, { fetchTakedown })(
  withRouter(TakedownList)
);
