import './SizzlePage.css';
import React from 'react';

export const SizzlePage = () => {
    return (
      <div className="box">
        <div className="sizzle-container">
          <div className="overlap-group">
            <div className="text-wrapper">Sizzle mobile/web app</div>
            <p className="UX-UI-designer">
              <span className="span">
                UX/UI Designer | Dietician-Patient Web &amp; Mobile App
                <br />
              </span>
              <span className="text-wrapper-2">
                <br />I am delighted to currently be a part of Sizzle, a pioneering startup dedicated to transforming the
                interaction between dieticians and patients. My role involves crafting intuitive user experiences for our
                web and mobile applications, to empower both users to navigate their healthcare journeys effortlessly.
              </span>
            </p>
            <img className="sizzle-logo" alt="Sizzle logo" src="sizzle-logo.png" />
          </div>
        </div>
      </div>
    );
  };

export default SizzlePage;