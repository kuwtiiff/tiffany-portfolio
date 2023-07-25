// SideNavbar.js
import React from 'react';
import './SideNavbar.css';

const SideNavbar = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav-title">Tiffany Gunawan</h2>
      <ul className="sidenav-links">
        <li><a href="#designs">Designs</a>
          <ul className="submenu">
            <li><a href="#bobeco">Bobeco App</a></li>
            <li><a href="#designco">Design Co</a></li>
          </ul>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </div>
  );
};

export default SideNavbar;


