import React from 'react'
import Register from './Register.js'
import './Home.scss'



const Home = () => {
    return (
        <div>
                    <h1 className="intro">Welcome to Jiu-Jitsu Trainer</h1>

        <div className= "container">
            <div className="home-left">
                {/* <p className="quote">There is no losing in jiu-jitsu.
                You either win or you learn.
               -Carlos Gracie</p> */}
                

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