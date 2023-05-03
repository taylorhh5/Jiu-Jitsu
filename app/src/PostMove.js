import React, { useState, useEffect } from "react";
import {
  addTakedown,
  addGuard,
  addMount,
  addSidemount,
  addBack,
} from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./PostMove.scss";

const PostMove = (props) => {

  const token = localStorage.getItem("token");

  const [drop, setDrop] = useState({
    move: "Takedown",
  });

  const user_id = localStorage.getItem("user_id");
  //when posting a move we are hardcoding the user id that is saved in local storage from login
  //this way we can get all moves with the users specific id for their profile page
  const [form, setForm] = useState({
    name: "",
    description: "",
    image_url: "",
    user_id: user_id,
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleDrop = (event) => {
    setDrop({
      ...drop,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {

    if (!token){
      alert("Please log into your account if you would like to add a move.")
    }

    // else if (drop.move === "Takedown") {
      event.preventDefault();
      props.addTakedown(form, drop.move, props.history);

      //code below no longer needed after switching to firebase
      
      // props.history.push("/profile");

      // return;
    // } 
    // else if (drop.move === "Guard") {
    //   event.preventDefault();
    //   props.addGuard(form, props.history);
    //   // props.history.push("/profile");
    // } else if (drop.move === "Mount") {
    //   event.preventDefault();
    //   props.addMount(form, props.history);
    //   // props.history.push("/profile");
    // } else if (drop.move === "Sidemount") {
    //   event.preventDefault();
    //   props.addSidemount(form, props.history);
    //   // props.history.push("/profile");
    // } else if (drop.move === "Back") {
    //   event.preventDefault();
    //   props.addBack(form, props.history);
    //   // props.history.push("/profile");
    // }
  };

  // if(props.moves.error.data){
  //   alert("Make sure you're logged in")
  //  }

  return (
    <div>
      {/* <h1>Adding: {drop.move}</h1> */}
      <form className="postform">
        <label className="movelabel"> Select move type: </label>
        <select
          value={drop.move}
          onChange={handleDrop}
          name="move"
          placeholder="Move"
        >
          <option value="Takedown">Takedown</option>
          <option value="Guard">Guard Move</option>
          <option value="Mount">Mount</option>
          <option value="Sidemount">Side Control Move</option>
          <option value="Back">Back Control Move</option>
        </select>
        <br />

        <input
          className="post-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder=" Move Name"
        />
        <br />
        <textarea
          className="post-description"
          rows="10"
          cols="20"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Move description"
        />
        <br />
        <input
          type="text"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          placeholder=" Picture URL -optional"
        />
        {/* <button onClick={(e) => { if (props.form.name===1) { 
   alert("Text cannot be blank.")}else
   handleSubmit(e)  }}>Add</button>
  */}
        <button
          className="postButton"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Post Move
        </button>
      </form>
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
export default connect(mapStateToProps, {
  addTakedown,
  addGuard,
  addMount,
  addSidemount,
  addBack,
})(withRouter(PostMove));
