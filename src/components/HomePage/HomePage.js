import React, { useState, useEffect } from "react";
import './HomePage.css';
import picture from './boba_kettle.svg'
const HomePage= () => {
    return(
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

                <div className = "bobeco-heading">
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
            <div className="bobeco-image">
            <img src={picture} alt="Bobeco Logo" />
              
            </div>
            </div>
          
        </div>          
    )
       
    
};

export default HomePage;