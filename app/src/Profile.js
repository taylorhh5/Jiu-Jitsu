import React, { useState, useEffect } from "react";
import { fetchTakedown, fetchBack, fetchGuard, fetchSidemount, fetchMount } from "./actions/moveActions.js";
import { connect } from "react-redux";
import Takedown from "./Takedown.js";
import { withRouter } from "react-router";

const Profile = (props) => {
  console.log(props, "props in single");

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


//   useEffect(() => {
//     const caseToEdit = props.caseInfo.find(
//       data => `${data.socialCaseId}` === props.match.params.id
//     );
//     if (caseToEdit) setInfo(caseToEdit);
//   }, [props.caseInfo, props.match.params.id])
//   useEffect(() => {
//     settakedowndata(props.moves.takedown);
//   }, [props.moves.takedown]);
//   console.log(takedowndata,"tttttttttttttt")

  if (props.loading) {
    return <h1>Loading...</h1>
  }
 

//   if (!takedowndata) {
//     return <h1>Loading...</h1>
//   }
  const chosenTakedown = props.moves.takedown.filter(
    (data) => `${data.user_id}` === user_id
  );
  console.log(chosenTakedown, "params");
  
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

  return (
    <div>
        <h1>profile</h1>

        <h2>Moves you've added</h2>


        {/* {(() => {
          if (guarddata) {
            return (
              <div>
                {" "}
                <h3>
                  Your opponent tries to take you down but you manage to get
                  them in your guard.Nice work!
                </h3>
          
                
                <h3>Or if you don't like where you've ended up, you can always  and start over</h3>
              </div>
            );
          }

        })()} */}

        
      <section>
        {chosenTakedown.map((takedown) => {
          return (
            <div key={takedown.id}>
              <h2>{takedown.name}</h2>
   <img src={takedown.image_url}  />
              <p>{takedown.description}</p>

           
            </div>
          );
        })}
      </section>
      
      <section>
         
        {chosenguard.map((guard) => {
          return (
            <div key={guard.id}>
              <h2>{guard.name}</h2>
   <img src={guard.image_url}  />
              <p>{guard.description}</p>

           
            </div>
          );
        })}
      </section>

      <section>
        {chosenmount.map((mount) => {
          return (
            <div key={mount.id}>
              <h2>{mount.name}</h2>
   <img src={mount.image_url}  />
              <p>{mount.description}</p>

           
            </div>
          );
        })}
      </section>

      <section>
        {chosensidemount.map((sidemount) => {
          return (
            <div key={sidemount.id}>
              <h2>{sidemount.name}</h2>
   <img src={sidemount.image_url}  />
              <p>{sidemount.description}</p>

           
            </div>
          );
        })}
      </section>

      <section>
        {chosenback.map((back) => {
          return (
            <div key={back.id}>
              <h2>{back.name}</h2>
   <img src={back.image_url}  />
              <p>{back.description}</p>

           
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
    error: state.error
  };
};
export default connect(mapStateToProps, { fetchTakedown,fetchBack, fetchGuard, fetchSidemount, fetchMount })(
  withRouter(Profile)
);
