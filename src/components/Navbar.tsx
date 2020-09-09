import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Logo from './Logo';
import NavBurger from './NavBurger';
import '../scss/navbar.scss';


function Navbar() {
  const location = useLocation();
  return (
    <nav className={location.pathname === "/" ? "home-nav" : ""}>

      <div className="NavLogo">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}><Logo /></Link>
      </div>

      <div className="NavLinks">
        <ul className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active-link LinkHome" : "LinkHome"}>
            <li><i className="fas fa-home"></i></li>
          </Link>
          <Link to="/a-propos" className={location.pathname === "/a-propos" ? "active-link LinkABout" : "LinkAbout"}>
            <li><i className="fas fa-user"></i></li>
          </Link>
          <Link to="/skills" className={location.pathname === "/skills" ? "active-link LinkSkills" : "LinkSkills"}>
            <li><i className="fas fa-cog"></i></li>
          </Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active-link LinkWorks" : "LinkWorks"}>
            <li><i className="far fa-eye"></i></li>
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active-link LinkContact" : "LinkContact"}>
            <li><i className="far fa-envelope"></i></li>
          </Link>
        </ul> 
      </div>

      <div className="NavFooter">
        <div className="NavFooterIcons">
          <a className="footer-icon" target="_blank" href="https://github.com/OmnipreZz" aria-label="GitHub" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
          </a>

          <a className="footer-icon" target="_blank" href="https://www.linkedin.com/in/geoffrey-frioli-362944168/" aria-label="Linkedin" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="footer-icon" target="_blank" href="https://twitter.com/Omni_DevWeb" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
          </a>
        </div> 
      </div> 

      <NavBurger />
      
    </nav>
  );
}

export default Navbar;