import React from "react";
import './landing.css';
import LandingImage from '../../assets/landing.webp';

const Landing = () => {
    return (
        <div className="landing-container">

            <div className="landing">
                <div className="welcome">
                    <botton className="welcome-button">
                        👋WELCOME TO MANAGE WISE!
                    </botton>
                </div>
                <div>
                    <h1 className="landing-heading">
                        Empower your business with <br></br>
                        <span style={{ color: '#fe8162' }}>Strategic</span> insights
                    </h1>
                </div>
                <div>
                    <p className="landing-para">
                        Powerful management platform designed to streamline your business <br></br>
                        operations, boost productivity, and drive success
                    </p>
                </div>
                <div className="landing-buttons">
                    <button className="button1">Get Started <i class="fa-solid fa-arrow-right landing-page-arrow"/></button>
                    
                    <button id="button2">Watch Demo</button>
                </div>
                <div className="landing-img-container">
                    <img src={LandingImage} alt="Landing" className="landing-image" />
                </div>


            </div>
        </div>
    )
}
export default Landing;