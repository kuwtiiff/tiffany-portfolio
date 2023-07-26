import './BobecoPage.css';
import boba from "./kettleBoba.svg"
const BobecoPage = () => {
    return(
        
        <div className = "bobeco-container">

            <div className="bobeco-image" >
                    <img src={boba} alt="Bobeco Logo" />
                </div>
            <div className = "bobeco-title">
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
                                Haozhong Jin
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

                    
                    {/* <div className = "bobeco-research">
                        <div className = "initial-research">
                            <h1>
                                INITIAL RESEARCH
                            </h1>
                        </div>
                        <div className = "improved-exp">
                            <h1>
                                Improved Experience
                            </h1>
                            <h2>
                                "Customers report a better experience when using self-service kiosks compared to placing orders with cashiers."
                            </h2>
                        </div>
                        <div className = "wrong-orders-allergies">
                            <h1>
                                Wrong Orders & Allergies
                            </h1>
                            <h2>
                                "Starbucks is now being sued after a barista's alleged mistake left a man in the hospital."
                            </h2>
                        </div>
                        <div className = "plastic-waste">

                        </div> */}
                    </div>
                    <div className = "overview-title">
                        <h1>Overview</h1>
                    </div>
                    <div className = "bobeco-overview">
                        <p>
                            Bobeco is an eco-friendly, transparent, automated boba vending machine that uses reusable 
                        </p>
                        <p>cups, made from recyclable material, or cups brought from home. It allows customers to</p>
                        <p> purchase freshly made and customizable drinks free from mixed orders.</p>
                    </div>
                 
                </div>
                     
    )
       
    
};

export default BobecoPage;