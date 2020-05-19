import React, { useState, useEffect } from "react";
import {login} from "./actions/authAction.js"
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Login = (props) => {
    const credentials = {
        email: '',
        password: ''
      }
      const [login, setlogin] = useState(credentials)
    
      const handleChange = event => {
        event.persist()
        setlogin({
          ...login,
          [event.target.name]: event.target.value
        });
      }
      const handleLogin = event => {
        
          event.preventDefault();
          console.log(login,"in login")
          props.login(login);
      
    }
      return (
        <>
        
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
              type="text"
              name="email"
              value={login.email}
              onChange={handleChange}
              placeholder="Email"
            /> 
            <input
              type="password"
              name="password"
              value={login.password}
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
    export default connect(mapStateToProps, { login})(
        withRouter(Login)
      );
