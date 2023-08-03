import React from 'react';
import './SideNavbar.css';
import { Link } from 'react-router-dom';

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
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </div>
  );
};

export default SideNavbar;


