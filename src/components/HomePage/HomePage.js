import './HomePage.css';
import React, { useEffect } from "react";
import {useNavigate, useLocation} from 'react-router-dom';
import pic1 from './dscicon.png';
import pic2 from './BobecoHeartsKetleLogo.png';
import pic3 from './Designcologo.png'
import pic4 from './s_sizzlelogo.png';

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the URL changes
    }, [location.pathname]); // Listen for changes in the URL

    const handleClick = (route) => {
        navigate(route);
    };

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
            
            <div className = "bobeco-container" onClick={() => handleClick('/bobeco-app')}>
                <div className = "bobeco-heading2">
                    <h1>
                        BOBECO APP
                    </h1>
                    <div className="right-content">
                        <img src={pic2} alt="Bobeco Kettle" />
                    </div>
                </div>


                <div className = "bobeco-concept">
                <h2>
                    User testing | Hi-fidelity | Concept
                </h2>
           
            </div>

            <div className = "bobeco-desc">
                <h2>
                    Concept Prototype Kiosk App for Boba Cafe designed for an eco-friendly vending machine, which offers transparent, automated boba service, prioritizing sustainability through reusable cups and recyclable materials, while ensuring accurate, customized drink orders.
                </h2>
            
            </div>

            </div>

            <div className = "designco-container" onClick={() => handleClick('/design-co')}>
                <div className = "designco-heading">
                    <h1>
                        DESIGN CO
                    </h1>
                    <div className="designco-icon">
                        <img src={pic3} alt="Design Icon" />
                    </div>
                </div>

                <div className = "designco-desc">
                    <h2>
                        Workshops | Design Community | UC San Diego
                    </h2>
                </div>
                <div className = "designco-intro">
                    <h2>
                    Being part of UC San Diego's largest design community was a game-changer. I got to dive deep into a world of creativity and innovation, as well as connect with other student designers. Through hands-on projects and workshops, I really got the hang of creating user experiences and picked up some serious skills in crafting prototypes using Figma!                    </h2>
                </div>
            </div>    

            <div className = "google-container" onClick={() => handleClick('/dsc-club')}>

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

            <div className="sizzle-container" onClick={() => handleClick('/sizzle-app')}>
            <div className="sizzle-heading">
                <h1>
                    SIZZLE MOBILE/WEB APP
                </h1>

            </div>
            <div className="sizzle-logo">
                    <img src={pic4} alt="Sizzle S" />
                </div>
            <div className="sizzle-desc">
                <h2>
                    UX/UI Designer | Dietician-Patient Web & Mobile App
                </h2>
            </div>
            <div className="sizzle-intro">
                <h2>
                    I am delighted to currently be a part of Sizzle, a pioneering startup dedicated to transforming the interaction between dieticians and patients. My role involves crafting intuitive user experiences for our web and mobile applications, to empower both users to navigate their healthcare journeys effortlessly.
                </h2>
            </div>          
        </div>  

        </div>   

    ) 
};

export default HomePage;