import group from "./TeamPhoto.png"
import badge from "./dscbadgelogo.png"
import banner from "./dscbanner.png"
import fb from "./FacebookLogo.png"
import workshop from "./WorkshopsPics.png"
import flyer from "./GoogleFlyersImages.png"
import './GoogleClubPage.css';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const GoogleClubPage= () => {
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

    return(
        <div className="developer-student">
        <div className="div-2">
          <div className="DSC-page-right-side">
            <div className="DSC-frame">
              <div className="overlap-group-2">
                <p className="p">
                  My best friends and I kickstarted the first Google Developer Student Club at San Diego Miramar Community
                  College that was funded by Google Developers.
                </p>
                <div className="design-columns">
                  <p className="duration-column">
                    <span className="span">
                      duration~
                      <br />
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      Aug 2019 - Jul 2021
                      <br />
                    </span>
                  </p>
                  <p className="team-column">
                    <span className="span">
                      team
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      <br />
                      Denzell WIlliams (Lead)
                      <br />
                      Ryan Whittaker <br />
                      Amy Matthews
                      <br />
                      Adonis Agoncillo
                      <br />
                      Hiro Fainza <br />
                      Sayeh Dehestani
                      <br /> <br />
                      <br />
                    </span>
                  </p>
                  <div className="tools-column">
                    <span className="span">
                      tools
                      <br />
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      Canva
                      <br />
                      G-Suite
                      <br />
                      Eventbrite
                      <br />
                      <br />
                      <br />
                      <br />
                    </span>
                  </div>
                  <div className="social-column">
                    <span className="span">
                      social media
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      <br />
                      Discord
                      <br />
                      Facebook
                      <br />
                      Instagram
                      <br />
                      LinkedIn
                      <br />
                      Twitter
                    </span>
                  </div>
                  <div className="scope-column">
                    <span className="span">
                      scope
                      <br />
                    </span>
                    <span className="text-wrapper-2">
                      <br />
                      Collaboration
                      <br />
                      Community Impact
                      <br />
                      Networking
                      <br />
                      Skill Development
                    </span>
                  </div>
                </div>
                <div className="DSC-page-title">
                  <div className="DSC-title-logo">
                    <h1 className="h-1">
                      <span className="text-wrapper-3">
                        DEVELOPER STUDENT CLUBS
                        <br />
                      </span>
                      <span className="text-wrapper-4">BY GOOGLE </span>
                    </h1>
                    <img className="dscbadgelogo" alt="Dscbadgelogo" src={badge} />
                  </div>
                </div>
              </div>
            </div>
            <div className="meet-our-team">
              <div className="overlap">
                <div className="text-wrapper-5">Meet Our Team</div>
                <div className="facebook-icon">
                  <a href="https://www.facebook.com/dscsdmc/" target="_blank" rel="noopener noreferrer">
                      <img src={fb} alt="Facebook" />
                  </a>
              </div>

              </div>
              <a href="https://www.facebook.com/dscsdmc/" target="_blank" rel="noopener noreferrer">
                <img className="google" alt="Google" src={group} />
            </a>

            </div>
            <div className="flyer-designs">
              <img className="google-flyers-images" alt="Google flyers images" src={flyer} />
              <p className="text-wrapper-6">Flyer Designs for our G-Suite Workshop</p>
            </div>
            <div className="gsuite-certification">
              <div className="gsuite-desc">
                <div className="text-wrapper-7">Google Cloud G-Suite Certification</div>
                <p className="a-google-cloud-badge">
                  A Google Cloud badge in G Suite signals to employers that you possess the digital skills to work
                  collaboratively and productively in a professional environment.
                  <br />
                  <br />
                  By earning the G Suite badge, you prove your ability to complete common workplace activities using
                  cloud-based tools to create and share documents, spreadsheets, presentations, and files. You demonstrate
                  that you can communicate effectively with email and online meeting solutions.
                </p>
              </div>
            </div>
            <div className="GCP-essentialsand">
              <a href="https://www.facebook.com/dscsdmc/" rel="noopener noreferrer" target="_blank">
                <img className="dscbanner" alt="Dscbanner" src={banner} />
              </a>
              <div className="GCP-certification">
                <div className="GCP">
                  <p className="in-this-introductory">
                    In this introductory-level quest, students get hands-on practice with the Google Cloud Platform’s
                    fundamental tools and services. <br />
                    <br />
                    GCP Essentials is the recommended first Quest for the Google Cloud learner—you can come in with little
                    or no prior cloud knowledge, and come out with practical experience that you can apply to your first
                    GCP project.
                    <br />
                    <br />
                    From writing Cloud Shell commands and deploying your first virtual machine, to running applications on
                    Kubernetes Engine or with load balancing, GCP Essentials is a prime introduction to the platform’s
                    basic features.
                  </p>
                  <div className="text-wrapper-8">GCP Essentials Certification</div>
                </div>
              </div>
            </div>
            <div className="technical-workshops">
              <div className="workshops-images">
                <div className="text-wrapper-9">Technical Workshops</div>
                <p className="my-team-and-i-also">
                  My team and I facilitated technical workshops with hands-on practice using Workspace&#39;s core
                  application (formerly G-suite) for students to earn their Google Cloud certifications. <br />
                  <br />
                  We held these meetings and technical workshops on campus in a computer-lab setting to provide hands-on
                  learning experiences for students who are interested in technology. <br />
                  <br />
                  This allowed us to create a convenient and accessible learning environment, encouraging more students to
                  participate and benefit from the knowledge-sharing opportunities.
                </p>
                <div className="workshops-pics">
                  <img className="img" alt="Google" src={workshop} />
                 
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
};

export default GoogleClubPage;
