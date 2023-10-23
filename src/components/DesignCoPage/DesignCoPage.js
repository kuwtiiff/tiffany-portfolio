import desktop from "./DesktopImageFrame.png";
import walletapp from "./WalletAppBackgroundPic.png";
import designcologo from "./Designcologo.png";
import youtube from "./YoutubeIcon.png";
import youtube2 from "./YoutubeIcon2.png";
import "./DesignCoPage.css";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const DesignCoPage = () => {
  const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="design-co-page">
      <div className="div-2">
        <div className="desicn-co-right-side">
          <div className="designcointro-frame">
          <div className="designco-logo">
                <img src={designcologo} alt="DSC Icon" />
            </div>
            <div className="overlap-group-2">
              <h1 className="h-1">DESIGN CO</h1>
              <p className="p">
                I joined UCSD’s largest design community and learned more on how
                to use Figma through their workshops :)
              </p>
              
            </div>
            <div className="design-co-columns">
              <div className="duration-column">
                <span className="span">
                  duration~
                  <br />
                </span>
                <span className="text-wrapper-2">
                  <br />
                  Spring 2023
                  <br />
                </span>
              </div>
              <div className="tools-column">
                <span className="span">
                  tools
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-2">
                  Figma
                  <br />
                  Zoom
                  <br />
                </span>
              </div>
              <div className="scope-column">
                <span className="span">
                  scope
                  <br />
                </span>
                <span className="text-wrapper-2">
                  <br />
                  Hi-Fidelity Prototyping
                  <br />
                  Design Process
                </span>
              </div>
              <p className="tasks-column">
                <span className="span">
                  tasks
                  <br />
                </span>
                <span className="text-wrapper-2">
                  <br />
                  Auto Layout
                  <br />
                  Components
                  <br />
                  Scrolling with your prototypes
                  <br />
                  Designing a screen
                  <br />
                  Simple prototyping
                </span>
              </p>
            </div>
          </div>

          <div className="workshopfigma-frame">
            <p className="workshop-figma-day">
              <span className="span">
                Workshop: Figma Day | Wednesday, January 18, 2023
                <br />
              </span>
              <span className="text-wrapper-3">
                <br />
              </span>
            </p>
            <p className="figma-day-workshop">
              Figma Day Workshop started with an overview of Figma, an
              introduction of tools, and simple prototyping.
              <br />
              After attending, I decided to follow an in-depth YouTube tutorial on designing apps by one of my favorite YouTubers, DesignCode, to practice utilizing
              Figma and the features it has to offer!
            </p>
          </div>
          <div className="buzzhubfigma-frame">
            <a
              className="buzz-hub-title-frame"
              href="https://www.youtube.com/watch?v=5IanQIwhA4E"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="buzzhub-for-students">
                <span className="text-wrapper-4">
                  BuzzHub for Students - A Design inspired by Discord
                  <br />
                </span>
                <span className="text-wrapper-5">
                  <br />
                </span>
              </p>

              <div className="youtube-icon" >
                    <img src={youtube} alt="Youtube icon" />
                </div>
              <youtube className="youtube-icon" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=5IanQIwhA4E"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="buzzhub-image">
                <img className="img" alt="Desktop" src={desktop} />
              </div>
            </a>
          </div>
          <div className="wallet-app">
          <div className="youtube-icon2" >
                <img src={youtube2} alt="Youtube icon2" />
            </div>
            <div className="wallet-app-title">
              <youtube color="original" platform="youtube-icon" />
              <a
                href="https://www.youtube.com/watch?v=5IanQIwhA4E"
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="text-wrapper-6">
                  UI Design a Wallet App in Figma - Full Course by Design Code
                </p>
              </a>
            </div>
      
            <a
              href="https://www.youtube.com/watch?v=5IanQIwhA4E"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="walletapp-image">
                <img className="img" alt="WalletApp" src={walletapp} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCoPage;
