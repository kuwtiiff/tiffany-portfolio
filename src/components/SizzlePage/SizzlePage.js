import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './SizzlePage.css';

const SizzlePage= () => {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return(
            <div className="sizzle-frame">
              <div className="sizzle-group">
                <div className="sizzle-title">sizzle - coming soon...</div>
                <p className="sizzle-intro">
                  My role in Sizzle’s company involves crafting intuitive user experiences for our web and mobile applications,
                  to empower both users to navigate their healthcare journeys effortlessly.
                </p>
              </div>
              <div className="sizzle-columns">
                <p className="duration-july">
                  <span className="span">
                    duration~
                    <br />
                  </span>
                  <span className="text-wrapper-2">
                    <br />
                    August 2023 - Present
                    <br />
                  </span>
                </p>
                <p className="tools-figma-slack">
                  <span className="span">
                    tools
                    <br />
                    <br />
                  </span>
                  <span className="text-wrapper-2">
                    Figma
                    <br />
                    Slack
                    <br />
                    Google Meet
                    <br />
                  </span>
                </p>
                <p className="scope-UX-UI-design">
                  <span className="span">
                    scope
                    <br />
                  </span>
                  <span className="text-wrapper-2">
                    <br />
                    UX/UI Design
                    <br />
                    <br />
                  </span>
                </p>
                <p className="tasks-low-to-hi">
                  <span className="span">
                    tasks
                    <br />
                  </span>
                  <span className="text-wrapper-2">
                    <br />
                    Low to Hi-Fidelity Wireframing Prototyping
                    <br />
                    User Research and Analysis
                    <br />
                    Illustrations and Iconography
                  </span>
                </p>
              </div>
            </div>
          )
        }

export default SizzlePage;