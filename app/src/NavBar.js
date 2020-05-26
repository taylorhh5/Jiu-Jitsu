import React from "react";
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import './NavBar.scss'

const NavBar = (props) => {
    console.log(props,"propsinnav")

    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        localStorage.removeItem('email')
        localStorage.removeItem('edit_type')
        props.history.push('/')
    }
  return (
    <div className="Nav">
      {/* <NavLink to="/Takedowns">Takedowns</NavLink>
      <NavLink to="/Guardlist">Guard</NavLink>
      <NavLink to="/MountList">Mount</NavLink>
      <NavLink to="/SidemountList">Side Control</NavLink>
      <NavLink to="/BackControl">Back Control</NavLink> */}
        <NavLink to="/review">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <NavLink to="/login">Login</NavLink>


      
      <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
    </div>
  );
};

export default withRouter(NavBar);
