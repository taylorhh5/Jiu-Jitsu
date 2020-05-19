import React, { useState, useEffect } from "react";
import { addTakedown, addGuard } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";



const PostMove = (props) => {

  const [drop, setDrop]=useState({
    move:"Takedown"
  });


    const [form, setForm]=useState({
        name:"",
        description:"",
        image_url:"",
        

    });
    const handleChange = event =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const handleDrop = event =>{
      setDrop({
          ...drop,
          [event.target.name]: event.target.value
      })

  }

      const handleSubmit = event => {
        if(drop.move ==="Takedown"){
          event.preventDefault();
          console.log(form,"in form")
          props.addTakedown(form);
          return;
        }else if (drop.move ==="Guard"){
        event.preventDefault();
        console.log(form,"in form")
        props.addGuard(form);
      }}



      
    return (
        <div>
          <h1>Move: {drop.move}</h1>
            <form>
              <h3>Select move type</h3>
            <label>Type of move: </label>
                <select 
                    value={drop.move}
                    onChange={handleDrop}
                    name="move"
                    placeholder="Move"

                >
                    <option value="Takedown">Takedown</option>
                    <option value="Guard">Guard Move</option>
                    <option value="Side">Side Control Move</option>
                    <option value="Back">Back Control Move</option>
                </select>
                <br/>

                <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Move Name"
                
                />
                     <input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Move description"
                
                />
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
export default connect(mapStateToProps, { addTakedown, addGuard })(
    withRouter(PostMove)
  );
  
