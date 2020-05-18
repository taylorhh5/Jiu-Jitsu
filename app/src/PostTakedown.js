import React, { useState, useEffect } from "react";
import { addTakedown } from "./actions/moveActions.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";



const PostTakedown = (props) => {

    const [form, setForm]=useState({
        name:"",
        description:"",
        image_url:"",
        mount_user_id:""

    });
    const handleChange = event =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

      const handleSubmit = event => {
        event.preventDefault();
        console.log(form,"in form")
        props.addTakedown(form);
      }
    return (
        <div>
            <form>
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
export default connect(mapStateToProps, { addTakedown })(
    withRouter(PostTakedown)
  );
  
