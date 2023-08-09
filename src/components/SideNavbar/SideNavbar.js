import React from 'react';
import './SideNavbar.css';
import { Link } from 'react-router-dom';

import resume from "./TiffanyGunawanResume.pdf"
const SideNavbar = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav-title">Tiffany Gunawan</h2>
      <ul className="sidenav-links">
        <li>
          <Link to="/">Designs</Link>
          <ul className="submenu">
            <li><Link to="/bobeco-app">Bobeco App</Link></li>
            <li><Link to="/design-co">Design Co</Link></li>
            <li><Link to ="/dsc-club">Google Developer Student Clubs</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li>
          {/* Downloadable button for the resume */}
          <a href={resume} download className="download-button">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;


