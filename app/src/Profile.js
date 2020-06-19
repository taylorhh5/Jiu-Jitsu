import React, { useState, useEffect } from "react";
import { fetchTakedown, fetchBack, fetchGuard, fetchSidemount, fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './Profile.scss'


const Profile = (props) => {

  const user_id = localStorage.getItem('user_id')
// const [takedowndata, settakedowndata]=useState()
// const [guarddata, setguarddata]=useState()


  useEffect(() => {
    props.fetchTakedown();
    props.fetchBack();
    props.fetchGuard();
    props.fetchMount();
    props.fetchSidemount();
  }, []);



  if (props.loading) {
    return <h1>Loading...</h1>
  }
 

//   if (!takedowndata) {
//     return <h1>Loading...</h1>
//   }
  const chosenTakedown = props.moves.takedown.filter(
    (data) => `${data.user_id}` === user_id
  );
  
  const chosenguard = props.moves.guard.filter(
    (data) => `${data.user_id}` === user_id
  );
  const chosenmount = props.moves.mount.filter(
    (data) => `${data.user_id}` === user_id
  );
  const chosensidemount = props.moves.sidemount.filter(
    (data) => `${data.user_id}` === user_id
  );
  const chosenback = props.moves.back.filter(
    (data) => `${data.user_id}` === user_id
  );
 const email = localStorage.getItem("email")


  return (
    <div className="profile-container">
    
        <h1 className='profile-greeting'>{`Welcome to your profile, ${email}!`}</h1>

        <h2 className="profile-h2">Here are the moves you've added.</h2>
  <div className="profile-inner-container">

        
      <section>
        {chosenTakedown.map((takedown) => {
          return (
            <div className="profile-move-div" key={takedown.id}>
              <h2 className="profile-move-name">{takedown.name}</h2>
   <img className="profile-move-img" src={takedown.image_url}  />
              <p className="profile-move-description">{takedown.description}</p>

              <Link to={`/delete/${takedown.id}`}>
            <button className="delete-button" onClick={e =>localStorage.setItem('edit_type', "Takedown")}>Delete this move</button>
          </Link>

            <Link to={`/edit/${takedown.id}`}>
            <button className="edit-button" onClick={e =>localStorage.setItem('edit_type', "Takedown")}>Edit this move</button>
          </Link>
            </div>
          );
        })}
      </section>
      
      <section>
         
        {chosenguard.map((guard) => {
          return (
            <div className="profile-move-div" key={guard.id}>
              <h2 lassName="profile-move-name">{guard.name}</h2>
   <img className="profile-move-img" src={guard.image_url}  />
              <p className="profile-move-description">{guard.description}</p>

              
              <Link to={`/delete/${guard.id}`}>
            <button className="delete-button" onClick={e =>localStorage.setItem('edit_type', "Guard")}>Delete this move</button>
          </Link>
              <Link to={`/edit/${guard.id}`}>
              <button className="edit-button" onClick={e => localStorage.setItem('edit_type', "Guard")}>Edit this move</button>
          </Link>
           
            </div>
          );
        })}
      </section>

      <section>
        {chosenmount.map((mount) => {
          return (
            
            <div className="profile-move-div" key={mount.id}> 
              <h2 lassName="profile-move-name">{mount.name}</h2>
   <img className="profile-move-img" className="profile-move-img" src={mount.image_url}  />
              <p className="profile-move-description">{mount.description}</p>

              <Link to={`/delete/${mount.id}`}>
            <button className="delete-button" onClick={e =>localStorage.setItem('edit_type', "Mount")}>Delete this move</button>
          </Link>
              <Link to={`/edit/${mount.id}`}>
              <button className="edit-button" onClick={e =>localStorage.setItem('edit_type', "Mount")}>Edit this move</button>
          </Link>
            </div>
          );
        })}
      </section>

      <section>
        {chosensidemount.map((sidemount) => {
          return (
              
            <div className="profile-move-div" key={sidemount.id}>
              <h2 lassName="profile-move-name">{sidemount.name}</h2>
   <img className="profile-move-img" src={sidemount.image_url}  />
              <p className="profile-move-description">{sidemount.description}</p>

              <Link to={`/delete/${sidemount.id}`}>
            <button className="delete-button" onClick={e =>localStorage.setItem('edit_type', "Sidemount")}>Delete this move</button>
          </Link>
              <Link to={`/edit/${sidemount.id}`}>
              <button className="edit-button" onClick={ e =>localStorage.setItem('edit_type', "Sidemount")}>Edit this move</button>
          </Link>
            </div>
          );
        })}
      </section>

      <section>
        {chosenback.map((back) => {
          return (
            <div className="profile-move-div" key={back.id}>
              <h2 lassName="profile-move-name">{back.name}</h2>
   <img className="profile-move-img" src={back.image_url}  />
              <p className="profile-move-description">{back.description}</p>
              
              <Link to={`/delete/${back.id}`}>
            <button className="delete-button" onClick={e =>localStorage.setItem('edit_type', "Back")}>Delete this move</button>
          </Link>
              <Link to={`/edit/${back.id}`}>
              <button className="edit-button" onClick={e =>localStorage.setItem('edit_type', "Back")}>Edit this move</button>
          </Link>
           
            </div>
          );
        })}
      </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moves: state.reducer,
    loading: state.loading,
    error: state.error
  };
};
export default connect(mapStateToProps, { fetchTakedown,fetchBack, fetchGuard, fetchSidemount, fetchMount })(
  withRouter(Profile)
);
