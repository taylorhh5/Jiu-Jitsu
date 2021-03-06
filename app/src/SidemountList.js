
import React, { useState, useEffect } from "react";
import { fetchSidemount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./MoveList.scss"

const SidemountList = (props) => {

  useEffect(() => {
    props.fetchSidemount();
  }, []);

  const [sidemount, setsidemount] = useState('');

  const handleChange = event => {
    setsidemount(event.target.value)
  }

  const filteredSidemount = props.moves.sidemount.filter(items =>
    items.name.toLowerCase().includes(sidemount.toLowerCase())
  )


  if (props.loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="list-container">
             <h1 className="h1title">You have side control of your opponent!</h1>

             <input
          className='search-input'
          type='text'
          name='takedown.name'
          value={filteredSidemount.name}
          onChange={handleChange}
          placeholder='Search Side Control Moves'
        />
             <h2>Choose your move...</h2>
      <section className="movelist-section">
        {filteredSidemount.map((sidemount) => {
          return (
            // <div className="movelist-move">
              <Link className="movelist-move" to={`/sidemount/${sidemount.id}`}>
                <h1 className="movelist-name"> {sidemount.name}</h1>
              </Link>
            // </div>
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
export default connect(mapStateToProps, { fetchSidemount })(
  withRouter(SidemountList)
);
