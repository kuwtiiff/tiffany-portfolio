import './BobecoPage.css';
import kettle from "./BobecoKettleHeartLogo2.png"
import prototype from "./IpadPrototypeApp.png"
import branding from "./Branding.png"
import woodenKiosk from "./WoodenKioskImages.png"
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const BobecoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        
        <div className = "bobeco-container2">

            <div className = "bobeco-title2">
                <h1>
                    BOBECO APP
                </h1> 
            </div>
            <div className = "bobeco-heading">
                <h1>
                    An Eco-Friendly Boba Vending Solution
                </h1>
            </div>
            <div className = "bobeco-column-container">
                <div className = "column-duration">
                    <h2>
                        duration~
                    </h2>
                    <ul>
                        <li>
                            <p>
                                10 weeks
                            </p>
                        </li>
                        <li>
                            <p>
                                Sept 2022 - Dec 2022
                            </p>
                        </li>
                    </ul>
                </div>
                <div className = "column-team">
                    <h2>
                        team
                    </h2>
                    <ul>
                        <li>
                            <p>
                                Haozhong Jin
                            </p>
                        </li>
                        <li>
                            <p>
                                Mark Meten
                            </p>
                        </li>
                       
                        <li>
                            <p>
                                Noah Siapno
                            </p>
                        </li>
                        <li>
                            <p>
                                Patrick Wang
                            </p>
                        </li>
                        
                    </ul>
                        
                </div>
                <div className = "column-tools">
                    <h2>
                        tools
                    </h2>
                    <ul>
                        <li>
                            <p>
                                Figma
                            </p>
                        </li>
                        <li>
                            <p>
                                Miro
                            </p>
                        </li>
                        <li>
                            <p>
                                Zoom
                            </p>
                        </li>
                    </ul>
                </div>
                <div className = "column-scope">
                    <h2>
                        scope
                    </h2>
                    <ul>
                        <li>
                            <p>
                                User Research and Analysis
                            </p>
                        </li>
                        <li>
                            <p>
                                Interaction Design
                            </p>
                        </li>
                        <li>
                            <p>
                                Hi-Fidelity Prototyping
                            </p>
                        </li>
                    </ul>
                </div>  
            </div>

            <div className = "bobeco-overview">
                         <div className = "overview-title">
                        <h1>Overview</h1>
                    </div>
                        <p>
                            Bobeco is an eco-friendly, transparent, automated boba vending machine that uses reusable cups, made from recyclable material, or cups brought from home. It allows customers to purchase freshly made and customizable drinks free from mixed orders.</p>
                        <div className="bobeco-image" >
                            <img src={kettle} alt="Bobeco Kettle" />
                        </div>
            </div>

            <div className = "bobeco-prototype">
                         <div className = "prototype-title">
                            <h1>Kiosk iPad Prototype</h1>
                        </div>

                        <div className="prototype-image" >
                            <img src={prototype} alt="Bobeco Kiosk" />
                        </div>
            </div>
        

                <div className = "initial-research-container"> 
                    <div className = "research-title">
                    <h1>Initial Research</h1>
                    </div>

                <div className = "research-container">
                <div className = "column-01">
                <h1>
                01
                </h1>
                <h2>
                Improved Experience
                </h2>
                <ul>
                <li>
                <a href="https://www.emerald.com/insight/content/doi/10.1108/JHTT-03-2020-0065/full/html">
                    <p>
                    “Customers report a better experience when using self-service kiosks compared to placing orders with cashiers.”
                    </p>
                    </a>
                </li>
                {/* <li>
                    <p>
                    https://www.emerald.com/insight/content/doi/10.1108/JHTT-03-2020-0065/full/html
                    </p>
                </li> */}
                </ul>
                </div>
                <div className = "column-02">
                <h1>
                02
                </h1>
                <h2>
                Wrong Orders & Allergies
                </h2>
                <ul>
                <li>
                <a href="https://www.today.com/food/man-severe-allergy-sues-starbucks-serving-him-wrong-drink-t164162">
                    <p>
                    “Starbucks is now being sued after a barista's alleged mistake left a man in the hospital.”
                    </p>
                    </a>
                </li>

                {/* <li>
                    <p>
                    https://www.today.com/food/man-severe-allergy-sues-starbucks-serving-him-wrong-drink-t164162
                    </p>
                </li> */}
                </ul>
                
                </div>
                <div className = "column-03">
                <h1>
                03
                </h1>
                <h2>
                Improved Experience
                </h2>
                <ul>
                <li>
                <a href="     https://link.springer.com/article/10.1007/s41660-022-00230-w">
                    <p>
                    “The food and beverage (F&B) industry is the primary source of plastic waste generation and approximately 141 megatonnes of global plastic waste has been generated by this industry in 2015.”
                    </p>
                    </a>
                </li>
                {/* <li>
                    <p>
                    https://link.springer.com/article/10.1007/s41660-022-00230-w
                    </p>
                </li> */}
                </ul>
                </div>
                </div>
                </div> 

                <div className = "fieldwork-observations">
                         <div className = "fieldwork-title">
                        <h1>Fieldwork Observations</h1>
                    </div>
                       <p>
                            All one-time plastic cups and straws; no sign of reusable containers
                       </p>
                       <p>
                            Customer approaching employee for fixing mixed up orders
                       </p>
                       <p>
                            Toppings in uncovered containers; exposed to air
                       </p>
                       <p>
                            Lines obstructed movement in surrounding areas
                       </p>
                       <p>
                            After ordering, customers seen to crowd around the store
                       </p>
                       <p>
                            Understaffed
                       </p>
                    </div>

                <div className = "interview-container"> 
                    <div className = "interview-title">
                        <h1>Interview Insights</h1>
                    </div>
                    <div className = "interview-insights-container">
                        <div className = "column-01">
                            <h2>
                                Boba shop employees mix up orders
                            </h2>
                        <ul>
                            <li>
                                <p>
                                    5/8 interviewees had a drink made incorrectly
                                </p>
                                <p>
                                    3/8 interviewees have dietary restrictions
                                </p>
                                <p>
                                    6/8 interviewees say they customize their orders
                                </p>
                            </li>
                        </ul>
                </div>

                <div className = "column-02">
                    <h2>
                        Overflowing plastic waste in boba industry
                    </h2>
                <ul>
                <li>
                    <p>
                        6/8 interviewees are concerned about the impact of plastic straws on marine animals
                    </p>
                    <p>
                        4/8 interviewees refrain from ordering boba due to environmental concerns
                    </p>
                    <p>
                        7/8 interviewees would like to use their hydro flasks for refillable boba
                    </p>
                </li>
                </ul>
                
                </div>
                <div className = "column-03">
                <h2>
                    Transparency and Food Safety
                </h2>
                <ul>
                <li>
                    <p>
                        3/8 interviewees have food allergies
                    </p>
                    <p>
                        6/8 interviewees mentioned about the lack of transparency of the boba making process at boba shops
                    </p>
                    <p>
                        4/8 interviewees had concerns about cross contamination of boba toppings
                    </p>
                </li>
                </ul>
                </div>
                </div>
                </div> 

                <div className = "our-solution">
                    <div className = "solution-title">
                        <h1>Our Solution</h1>
                    </div>
                    <p>
                        Our kiosk works in many places, including malls and spots around the campus. The eco friendly vending machine offers people the opportunity to bring their own refillable containers or purchase a reusable cup. People with dietary restrictions can also benefit from our kiosk as robots do not mess up their customized orders like human employees. The transparent panel allows customers to see how their drinks are made, which eliminates food safety concerns.
                    </p>
                </div>

                <div className = "branding-system-design">
                    <div className = "branding-title">
                        <h1>Branding + System Design</h1>
                    </div>
                    <div className="prototype-image2" >
                        <img src={branding} alt="system-design" />
                    </div>
            </div>
            <div className="kiosk">
                <h1 className="mini-wooden-kiosk">Mini Wooden Kiosk</h1>
             </div>

                <div className="prototype-image3" >
                    <img src={woodenKiosk} alt="wooden-kiosk" />
                </div>

        </div>
     
    )
};

export default BobecoPage;
