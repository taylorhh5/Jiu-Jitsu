import React, { useState, useEffect } from "react";
import {
  fetchTakedown,
  fetchBack,
  fetchSidemount,
  fetchMount,
  fetchGuard,
  deleteTakedown,
  deleteBack,
  deleteGuard,
  deleteMount,
  deleteSidemount,
} from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./DeleteMove.scss";

const DeleteMove = (props) => {

  const move = localStorage.getItem("edit_type");

  useEffect(() => {
    if (move === "Takedown") {
      props.fetchTakedown();

      return;
    } else if (move === "Guard") {
      props.fetchGuard();
      return;
    } else if (move === "Mount") {
      props.fetchMount();
      return;
    } else if (move === "Sidemount") {
      props.fetchSidemount();
      return;
    } else if (move === "Back") {
      props.fetchBack();
      return;
    }
  }, []);

  const [form, setForm] = useState();

  useEffect(() => {
    if (move === "Takedown") {
      const caseToEdit = props.moves.takedown.find(
        (data) => `${data.id}` === props.match.params.id
      );

      if (caseToEdit) setForm(caseToEdit);
      return;
    } else if (move === "Guard") {
      const caseToEdit = props.moves.guard.find(
        (data) => `${data.id}` === props.match.params.id
      );

      if (caseToEdit) setForm(caseToEdit);
      return;
    } else if (move === "Mount") {
      const caseToEdit = props.moves.mount.find(
        (data) => `${data.id}` === props.match.params.id
      );

      if (caseToEdit) setForm(caseToEdit);
      return;
    } else if (move === "Sidemount") {
      const caseToEdit = props.moves.sidemount.find(
        (data) => `${data.id}` === props.match.params.id
      );

      if (caseToEdit) setForm(caseToEdit);
      return;
    } else if (move === "Back") {
      const caseToEdit = props.moves.back.find(
        (data) => `${data.id}` === props.match.params.id
      );

      if (caseToEdit) setForm(caseToEdit);
      return;
    }
  }, [props]);

  //     const handleDrop = event =>{
  //       setDrop({
  //           ...drop,
  //           [event.target.name]: event.target.value
  //       })

  //   }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (move === "Takedown") {
      props.deleteTakedown(props.match.params.id, props.history);
      // props.history.push("/profile");

      return;
    } else if (move === "Guard") {
      event.preventDefault();

      props.deleteGuard(props.match.params.id, props.history);
      // props.history.push("/profile");
      return;
    } else if (move === "Mount") {
      event.preventDefault();

      props.deleteMount(props.match.params.id, props.history);
      // props.history.push("/profile");
      return;
    } else if (move === "Sidemount") {
      event.preventDefault();

      props.deleteSidemount(props.match.params.id, props.history);
      // props.history.push("/profile");
      return;
    } else if (move === "Back") {
      event.preventDefault();

      props.deleteBack(props.match.params.id, props.history);
      // props.history.push("/profile");
      return;
    }
  };

  // if(props.moves.error.data){
  //   alert("Make sure you're logged in")
  //  }
  if (!form) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="delete-container">
      <div className="delete-button-div">
        <h1>Are you sure you want to delete this move?</h1>
        <button
          className="delete-button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Delete Move
        </button>
      </div>
      <div className="delete-inner-div">
        <h2>{form.name}</h2>

        <img src={form.image_url} />
        <p>{form.description}</p>
      </div>
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
  fetchTakedown,
  fetchBack,
  fetchSidemount,
  fetchMount,
  fetchGuard,
  deleteTakedown,
  deleteBack,
  deleteGuard,
  deleteMount,
  deleteSidemount,
})(withRouter(DeleteMove));
