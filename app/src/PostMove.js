import React, { useState, useEffect } from "react";
import { addTakedown, addGuard, addMount, addSidemount, addBack } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";



const PostMove = (props) => {
  console.log(props.moves.error.data,"props in post")

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
      }else if (drop.move ==="Mount"){
        event.preventDefault();
        console.log(form,"in form")
        props.addMount(form);
      }else if (drop.move ==="Sidemount"){
        event.preventDefault();
        console.log(form,"in form")
        props.addSidemount(form);
      }else if (drop.move ==="Back"){
        event.preventDefault();
        console.log(form,"in form")
        props.addBack(form);
      }
    }


    // if(props.moves.error.data){
    //   alert("Make sure you're logged in")
    //  }
      
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
                    <option value="Mount">Mount</option>
                    <option value="Sidemount">Side Control Move</option>
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
export default connect(mapStateToProps, { addTakedown, addGuard, addMount, addSidemount, addBack })(
    withRouter(PostMove)
  );
  
