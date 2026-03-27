import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header sticky-top">
      <div className="container">
        <div className="header-wrapper">
          {/* Logo */}
          <div className="logo">
            <span>Wanderlust</span>
          </div>

          {/* Navigation */}
          <nav className="nav-links d-none d-md-flex gap-4">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="d-none d-md-block">
            <a href="#contact" className="btn btn-primary book-btn">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
