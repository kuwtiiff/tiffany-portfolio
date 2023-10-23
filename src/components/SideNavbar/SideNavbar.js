import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="sidenav">
      <h2 className="sidenav-title">Tiffany Gunawan</h2>
      <ul className="sidenav-links">
        <li>
          <Link to="/" activeClassName="active-link" onClick={handleClick}>
            Designs
          </Link>
          <ul className="submenu">
            <li>
              <Link to="/bobeco-app" onClick={handleClick}>
                Bobeco App
              </Link>
            </li>
            <li>
              <Link to="/design-co" onClick={handleClick}>
                Design Co
              </Link>
            </li>
            <li>
              <Link to="/dsc-club" onClick={handleClick}>
                Google Developer Student Clubs
              </Link>
            </li>
            <li>
              <Link to="/sizzle-app" onClick={handleClick}>
                Sizzle App
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <a href={resume} download className="download-button">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
