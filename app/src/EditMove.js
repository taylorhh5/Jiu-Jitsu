import React, { useState, useEffect } from "react";
import { editTakedown, fetchTakedown, fetchBack, fetchSidemount, fetchMount,fetchGuard, editBack, editGuard, editMount, editSidemount} from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./EditMove.scss"


const EditMove = (props) => {

  const move = localStorage.getItem("edit_type")
    
  useEffect(() => {


    if(move ==="Takedown"){
        props.fetchTakedown();

      
      return;
    }else if (move ==="Guard"){
   
        props.fetchGuard();
        return;
    }else if (move ==="Mount"){
   
        props.fetchMount();
        return;
    }else if (move ==="Sidemount"){
   
        props.fetchSidemount();
        return;
    }else if (move ==="Back"){
   
        props.fetchBack();
        return;
    }

}, []);


  

    const [form, setForm]=useState({
        name:"",
        description:"",
        image_url:"",
        
        

    });

    

      useEffect(() => {


        if(move ==="Takedown"){
            const caseToEdit = props.moves.takedown.find(
                data => `${data.id}` === props.match.params.id
              );
    
              if (caseToEdit) setForm(caseToEdit);
          return;
        }else if (move ==="Guard"){
       
            const caseToEdit = props.moves.guard.find(
                data => `${data.id}` === props.match.params.id
              );
    
              if (caseToEdit) setForm(caseToEdit);
            return;
        }else if (move ==="Mount"){
       
            const caseToEdit = props.moves.mount.find(
                data => `${data.id}` === props.match.params.id
              );
    
              if (caseToEdit) setForm(caseToEdit);
            return;
        }else if (move ==="Sidemount"){
       
            const caseToEdit = props.moves.sidemount.find(
                data => `${data.id}` === props.match.params.id
              );
    
              if (caseToEdit) setForm(caseToEdit);
            return;
        }else if (move ==="Back"){
       
            const caseToEdit = props.moves.back.find(
                data => `${data.id}` === props.match.params.id
              );
    
              if (caseToEdit) setForm(caseToEdit);
            return;
        }
    
    }, [props]);
    
    const handleChange = event =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

//     const handleDrop = event =>{
//       setDrop({
//           ...drop,
//           [event.target.name]: event.target.value
//       })

//   }

      const handleSubmit = event => {
        event.preventDefault();

        if(move ==="Takedown"){
            props.editTakedown(form, props.history);
    
          
          return;
        }else if (move ==="Guard"){
            event.preventDefault();

            props.editGuard(form, props.history);
            return;
        }else if (move ==="Mount"){
            event.preventDefault();

            props.editMount(form, props.history);
            return;
        }else if (move ==="Sidemount"){
            event.preventDefault();

            props.editSidemount(form, props.history);
            return;
        }else if (move ==="Back"){
            event.preventDefault();

            props.editBack(form, props.history);
            return;
        }

       
    
    }

    


    // if(props.moves.error.data){
    //   alert("Make sure you're logged in")
    //  }
      
    return (
        <div className="edit-container">
          
            <form className="edit-form"> 
     
<h4>Move Name</h4>
                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Move Name"
                
                />
                <br/>
                <h4>Move Description</h4>
                     <textarea
                     rows="10" cols="35"
                     className="edit-description"
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Move description"
                
                />
                <br/>
                <h4>Move image url</h4>
                     <input
                className="edit-input"     
                type="text"
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                placeholder="Url of move picture"               
                />
                <br/>
     
                        <button className="edit-form-button" onClick={e => {  handleSubmit(e) }}>Edit</button>


            </form>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      moves: state.reducer,
      loading: state.loading,
      error: state.error,
    };
  };
export default connect(mapStateToProps, { editTakedown,fetchTakedown, fetchBack, fetchSidemount, fetchMount,fetchGuard, editBack, editGuard, editMount, editSidemount})(
    withRouter(EditMove)
  );
  
