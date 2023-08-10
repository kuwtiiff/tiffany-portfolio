import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition

import resume from "./TiffanyGunawanResume.pdf";

const SideNavbar = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav-title">Tiffany Gunawan</h2>
      <ul className="sidenav-links">
        {/* Wrap each menu item with CSSTransition */}
        <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
          <li>
            <Link to="/" activeClassName="active-link">
              Designs
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/bobeco-app">Bobeco App</Link>
              </li>
              <li>
                <Link to="/design-co">Design Co</Link>
              </li>
              <li>
                <Link to="/dsc-club">Google Developer Student Clubs</Link>
              </li>
            </ul>
          </li>
        </CSSTransition>
        {/* Other menu items */}
        <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
          <li>
            <Link to="/about">About</Link>
          </li>
        </CSSTransition>
        <CSSTransition in={true} timeout={300} classNames="fade" unmountOnExit>
          <li>
            <a href={resume} download className="download-button">
              Resume
            </a>
          </li>
        </CSSTransition>
      </ul>
    </div>
  );
};

export default SideNavbar;
