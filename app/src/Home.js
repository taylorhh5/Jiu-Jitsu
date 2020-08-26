import React, {useEffect} from 'react'
import Register from './Register.js'
import Login from './Login'
import axios from 'axios'

import './Home.scss'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";





const Home = (props) => {

    useEffect(() => {
        axios
          .get("https://jiujitsux.herokuapp.com/api/users/2")
          .then(response => {
            console.log("Welcome");
            
          })
          .catch(error => console.log("error"));
      }, []);
    return (
        <div>
            <div className="top-home">
                    <Link to="/review"><h1 className="intro">Brazilian Jiu-Jitsu Trainer</h1></Link>

                    < Login/>
</div>
<Link to="/review"> <h2 className="guestEnter">CLICK TO ENTER</h2> </Link>
        <div className= "container">
            <div className="home-left">
                

            </div>
            <div className="home-right">
                <h1 className="member">Not a member?</h1>

                <Register/>

            </div>
            
        </div>
        
        </div>
    )
}

export default Home