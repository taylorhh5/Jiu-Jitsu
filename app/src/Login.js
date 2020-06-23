import React, { useState, useEffect } from "react";
import { login } from "./actions/authAction.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./Login.scss";

const Login = (props) => {
  const credentials = {
    email: "",
    password: "",
  };
  const [login, setlogin] = useState(credentials);

  const handleChange = (event) => {
    event.persist();
    setlogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    props.login(login, props.history);
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleLogin}>
        <label className ="loginLabel">
          Email
          <input
          className="loginInput"
            type="text"
            name="email"
            value={login.email}
            onChange={handleChange}
          />
        </label>
        <label className ="loginLabel">
          Password
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          // placeholder=" Password"
        />
</label>
        <button className="loginButton">Log In</button>
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
export default connect(mapStateToProps, { login })(withRouter(Login));
