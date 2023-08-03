import React, { useState, useEffect } from "react";
import bottombanner from "./BottomPageBanner.svg";
import './AboutPage.css';
const AboutPage= () => {
    

    return( 
    
    <div className="about-page">
    <div className="div">
      <div className="about-page-right">
       
        <div className="hello">
          <h1 className="hello-my-name-is">
            <span className="text-wrapper">
              Hello,
              <br />
              my name is tiffany gunawan
              <br />
            </span>
            <span className="span">
              <br />
            </span>
          </h1>
          <p className="i-am-an-aspiring-UX">
            <span className="text-wrapper-2">I am an aspiring UX Designer with a degree in </span>
            <span className="text-wrapper-3">Cognitive Science</span>
            <span className="text-wrapper-2"> and specialization in </span>
            <span className="text-wrapper-3">Design and Interaction</span>
            <span className="text-wrapper-2">
              . I’m seeking an opportunity to show my creativity and contribute in the design world.
            </span>
          </p>
        </div>
        <div className="other-than-design">
          <div className="text-wrapper-4">Other than design</div>
          <p className="i-love-shoes-and">
            <span className="text-wrapper-5">I </span>
            <span className="text-wrapper-6">love</span>
            <span className="text-wrapper-5">
              {" "}
              shoes and fashion
              <br />
              <br />I{" "}
            </span>
            <span className="text-wrapper-6">enjoy</span>
            <span className="text-wrapper-5">
              {" "}
              spending time with nature and my farm animals
              <br />
              <br />
              My favorite place is my second home,{" "}
            </span>
            <span className="text-wrapper-6">San Diego, Ca</span>
          </p>
        </div>
        <div className="bottom-banner-image" >
            <img className="img" alt="bottombanner" src={bottombanner} />
              </div>
      </div>

      {/* <div className="left-side-component">
        <div className="overlap">
          <div className="text-wrapper-7">Tiffany Gunawan</div>
          <div className="nav-bar">
            <div className="text-wrapper-8">Designs</div>
            <div className="sub-nav-bar-menu">
              <div className="text-wrapper-9">Bobeco App</div>
              <div className="bobeco-app">Design Co</div>
              <div className="designs">Google Developer Student Club</div>
            </div>
            <div className="text-wrapper-10">About</div>
            <a
              className="resume"
              href="https://drive.google.com/file/d/1fTOSO5ZLDJRGZ8Bs25WItgggnOnU7Im4/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="overlap-group">
                <a
                  className="text-wrapper-11"
                  href="https://drive.google.com/file/d/1fTOSO5ZLDJRGZ8Bs25WItgggnOnU7Im4/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  </div>
    )
};

export default AboutPage;