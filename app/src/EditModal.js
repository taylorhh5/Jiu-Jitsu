import React, { useState, useEffect } from "react";
import { editTakedown, fetchTakedown, fetchBack, fetchSidemount, fetchMount,fetchGuard, editBack, editGuard, editMount, editSidemount} from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./EditMove.scss"
import EditMove from "./EditMove.js"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const EditModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditMove/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
        </div>
    )
}

export default EditModal