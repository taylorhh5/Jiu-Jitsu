import React, { useState, useEffect } from "react";
import { editTakedown, fetchTakedown} from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";



const EditMove = (props) => {
  console.log(props,"props in edit")

  
  useEffect(() => {
    props.fetchTakedown();
  }, []);

//   const [drop, setDrop]=useState({
//     move:"Takedown"
//   });

  const user_id = localStorage.getItem('user_id')
  console.log(user_id, "uid")

    const [form, setForm]=useState({
        name:"",
        description:"",
        image_url:"",
        
        

    });

    useEffect(() => {
        const caseToEdit = props.moves.takedown.find(
          data => `${data.id}` === props.match.params.id
        );
        if (caseToEdit) setForm(caseToEdit);
      }, [])
    
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
          props.editTakedown(form);
       
    
    }


    // if(props.moves.error.data){
    //   alert("Make sure you're logged in")
    //  }
      
    return (
        <div>
          
          {/* <h1>Move: {drop.move}</h1> */}
            <form>
              {/* <h3>Select move type</h3>
            <label>Type of move: </label>
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
                <br/> */}

                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Move Name"
                
                />
                <br/>
                     <textarea
                     rows="20" cols="50"
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Move description"
                
                />
                <br/>
                     <input
                type="text"
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                placeholder="Url of move picture"               
                />
                        {/* <button onClick={(e) => { if (props.form.name===1) { 
   alert("Text cannot be blank.")}else
   handleSubmit(e)  }}>Add</button>
  */}
                        <button onClick={e => {  handleSubmit(e) }}>Add</button>


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
export default connect(mapStateToProps, { editTakedown,fetchTakedown})(
    withRouter(EditMove)
  );
  
