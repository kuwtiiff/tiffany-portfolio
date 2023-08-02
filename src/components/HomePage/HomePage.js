import React, { useState, useEffect } from "react";
import './HomePage.css';
import pic1 from './dsclogo.svg'
import pic2 from './bobeco_kettle.svg'
const HomePage= () => {
    return (
        <div className = "home-container">
            <div className = "home-title">
                <h1>
                    Tiffany Gunawan
                </h1> 
            </div>
            <div className = "jobtitle-heading">
                <h1>
                    UX/UI DESIGNER
                </h1>
            </div>
            <div className = "intro-heading">
                <h2>
                    Hello, I studied design + interaction at UC San Diego and I love creating meaningul
                    and user-centric experiences that leave a positive impact on people's lives.
                </h2>

            </div>
            <div className = "bobeco-container">

                <div className = "bobeco-heading2">
                    <h1>
                        BOBECO APP
                    </h1>
                </div>

                <div className = "bobeco-concept">
                <h2>
                    User testing | Hi-fidelity | Concept
                </h2>
           
            </div>

            <div className = "bobeco-desc">
                <h2>
                    Prototype Kiosk App for Boba Cafe
                </h2>
            
            </div>

            <div className="right-content">
                <img src={pic2} alt="Bobeco Kettle" />
            </div>
            </div>

            <div className = "designco-container">

                <div className = "designco-heading">
                    <h1>
                        DESIGN CO
                    </h1>
                </div>

                <div className = "designco-desc">
                    <h2>
                        Workshops | Design Community
                    </h2>
                </div>
                <div className = "designco-intro">
                    <h2>
                       I connected with UC San Diego's largest design community and learned more about how to make prototype designs using Figma.
                    </h2>
                </div>
            </div>    


            <div className = "google-container">

                <div className = "google-heading">
                    <h1>
                        GOOGLE DEVELOPER STUDENT CLUBS
                    </h1>
                </div>

                <div className = "google-desc">
                    <h2>
                        Marketing Lead | Technical Workshops | Google Cloud
                    </h2>
                </div>
                <div className = "google-intro">
                    <h2>
                       My friends and I started a developer student club in community college that was funded by Google Developers. As a marketing lead, I managed our social media marketing on several platforms and designed workshop flyers. My team and I also facilitated technical workshops with hands-on practice using Workspace's core application (G-suite).
                    </h2>
                </div>
                <div className="google-logo">
                    <img src={pic1} alt="DSC Logo" />
                </div>
            </div>          
        </div>

    ) 
};

export default HomePage;