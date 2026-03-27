import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          
          {/* Image Section */}
          <div className="about-image-wrapper">
            <img
              src="/images/river.jpg"
              alt="About Wanderlust"
              className="about-image"
            />
            
          </div>

          {/* Content Section */}
          <div className="about-content">
            <h4 className="about-tag">Our Story</h4>
            <h2 className="about-title">
              Crafting Memories That Last A Lifetime
            </h2>

            <p className="about-description">
              Founded in 2008, Wanderlust Travels has been dedicated to bringing
              people closer to the wonders of our planet. We believe that travel
              is more than just visiting a place—it's about the stories you
              create and the perspectives you gain.
            </p>

            <p className="about-description">
              Our team of expert travel curators spends thousands of hours
              scouting unique locations and partner hotels to ensure your
              journey is seamless, luxurious, and truly authentic.
            </p>

            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-number">50k+</span>
                <span className="stat-text">Happy Travelers</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">200+</span>
                <span className="stat-text">Destinations</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
