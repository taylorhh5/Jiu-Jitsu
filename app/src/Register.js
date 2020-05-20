import React, { useState, useEffect } from "react";
import {register} from "./actions/authAction.js"
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Register = (props) => {
    const credentials = {
        email: '',
        password: ''
      }
      const [signUp, setSignUp] = useState(credentials)
    
      const handleChange = event => {
        event.persist()
        setSignUp({
          ...signUp,
          [event.target.name]: event.target.value
        });
      }
      const handleLogin = event => {
        
          event.preventDefault();
          console.log(signUp,"in signup")
          props.register(signUp, props.history);
      
    }
      return (
        <>
        
          <form onSubmit={handleLogin}>
            <h1>Sign up</h1>
            <input
              type="text"
              name="email"
              value={signUp.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={signUp.password}
              onChange={handleChange}
              placeholder="Password"
            />
      
            <button>Sign up</button>
            {/* <Link to="/login">Already a member?</Link> */}
          </form>
        </>
      );
    };

    const mapStateToProps = (state) => {
        return {
          user: state.reducer,
          loading: state.loading,
          error: state.error,
        };
      };
    export default connect(mapStateToProps, { register})(
        withRouter(Register)
      );
