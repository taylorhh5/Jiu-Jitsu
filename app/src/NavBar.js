import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <NavLink to="/Takedowns">Takedowns</NavLink>
      <NavLink to="/Guardlist">Guard</NavLink>
      <NavLink to="/MountList">Mount</NavLink>
      <NavLink to="/SidemountList">Side Control</NavLink>
      <NavLink to="/BackControl">Back Control</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default NavBar;
