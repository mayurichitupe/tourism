import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <section id="packages" className="packages-section">
      <div className="packages-container">
        {/* Section Header */}
        <div className="packages-header">
          <h6 className="packages-subtitle">Top Picks</h6>
          <h2 className="packages-title">Popular Travel Packages</h2>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {/* Package 1 */}
          <div className="package-card">
            <img
              src="/images/snow.jpeg"
              alt="Swiss Alps"
              className="package-image"
            />
            <div className="package-body">
              <div className="package-top">
                <h5>Swiss Alps Expedition</h5>
                <span className="price">$1,299</span>
              </div>
              <p className="duration">7 Days / 6 Nights</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dignissimos ad incidunt laborum, eaque non.
              </p>
              <button className="package-btn">View Details</button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="package-card">
            <img
              src="images/boat.jpg"
              alt="Bali"
              className="package-image"
            />
            <div className="package-body">
              <div className="package-top">
                <h5>Tropical Bali Bliss</h5>
                <span className="price">$850</span>
              </div>
              <p className="duration">5 Days / 4 Nights</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dignissimos ad incidunt laborum, eaque non.
              </p>
              <button className="package-btn">View Details</button>
            </div>
          </div>

          {/* Package 3 */}
          <div className="package-card">
            <img
              src="/images/city.webp"
              alt="Paris"
              className="package-image"
            />
            <div className="package-body">
              <div className="package-top">
                <h5>Paris City Getaway</h5>
                <span className="price">$1,100</span>
              </div>
              <p className="duration">4 Days / 3 Nights</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dignissimos ad incidunt laborum, eaque non.
              </p>
              <button className="package-btn">View Details</button>
            </div>
          </div>

          {/* Package 4 */}
          <div className="package-card">
            <img
              src="/images/vietnam.webp"
              alt="Tokyo"
              className="package-image"
            />
            <div className="package-body">
              <div className="package-top">
                <h5>Tokyo Neon Dreams</h5>
                <span className="price">$1,450</span>
              </div>
              <p className="duration">6 Days / 5 Nights</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dignissimos ad incidunt laborum, eaque non.
              </p>
              <button className="package-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
