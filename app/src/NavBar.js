import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="Nav">
            <NavLink  to="/Takedowns">Takedowns</NavLink>
            <NavLink  to="/Guardlist">Guard</NavLink>
            <NavLink  to="/MountList">Mount</NavLink>
            <NavLink  to="/Sidemount">Sidemount</NavLink>
            <NavLink  to="/BackControl">Back Control</NavLink>
            <NavLink  to="/">Home</NavLink>

            
        </div>
    )
}

export default NavBar