import React, { useState, useEffect } from "react";
import {register} from "./actions/authAction.js"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./Register.scss"

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
          props.register(signUp, props.history);
      
    }
    
      return (
        <>
        
          <form className="registerForm" onSubmit={handleLogin}>
            <h1 className="signup">Sign up</h1>
            <p className="signupP">It's quick and easy.</p>
            <input
             className="registerInput"
              type="text"
              name="email"
              value={signUp.email}
              onChange={handleChange}
              placeholder=" Email"
            />
            <input
            className="registerInput"
              type="password"
              name="password"
              value={signUp.password}
              onChange={handleChange}
              placeholder=" Password"
            />
      
            <button className="signup-button">Sign up</button>
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
