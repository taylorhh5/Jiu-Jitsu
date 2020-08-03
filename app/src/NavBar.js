import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.scss";

const NavBar = (props) => {
  const [navShow, setnavShow] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (window.location.pathname ==="/") {
      setnavShow(false);
    } else {
      setnavShow(true);
    }
  }, [props.location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    localStorage.removeItem("edit_type");
    props.history.push("/");
  };
  return (
    <div>
      {navShow ? (
        <div className="Nav">
          <div className="navleft">
          <p className="quote">There is no losing in jiu-jitsu.</p>
                <p className="quote2">You either win or you learn. -Carlos Gracie </p>
               
            </div>
          <NavLink to="/review">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>

          <NavLink to="/" onClick={handleLogout}>
            {token ? "Logout" : "Register"}
          </NavLink>
         
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(NavBar);
