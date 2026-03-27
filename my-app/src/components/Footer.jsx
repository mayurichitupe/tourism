import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-col">
            <h3 className="footer-brand">Wanderlust</h3>
            <p className="footer-text">
              Making the world accessible, one journey at a time. Expert curated
              travel experiences for the modern explorer.
            </p>
            <div className="footer-socials">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li>Group Tours</li>
              <li>Custom Itineraries</li>
              <li>Travel Insurance</li>
              <li>Hotel Booking</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr />

        <div className="footer-bottom">
          <p>© 2024 Wanderlust Travels Inc. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
