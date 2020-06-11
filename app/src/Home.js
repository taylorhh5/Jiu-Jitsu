import React from 'react'
import Register from './Register.js'
import Login from './Login'
import './Home.scss'
import { withRouter } from "react-router";




const Home = (props) => {
    return (
        <div>
            <div className="top-home">
                    <h1 className="intro">Brazilian Jiu-Jitsu Trainer</h1>
                    < Login/>
</div>
        <div className= "container">
            <div className="home-left">
                {/* <p className="quote">There is no losing in jiu-jitsu.
                You either win or you learn.
               -Carlos Gracie</p> */}
                

            </div>
            <div className="home-right">
                <h1 className="member">Not a member?</h1>
{/*                 
                <p className="memberQuote">There is no losing in jiu-jitsu.
                You either win or you learn.
               -Carlos Gracie</p>  */}
                <Register/>

            </div>
            
        </div>
        
        </div>
    )
}

export default Home