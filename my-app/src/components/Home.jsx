import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">

      {/* Background Image */}
      <div className="home-bg">
        <img
          src="/images/girlimg.jpg"
          alt="Travel Destination"
          className="home-bg-img"
        />
        <div className="home-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container home-content">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8">

            <h1 className="home-title">
              Adventure Awaits
            </h1>

            <p className="home-subtitle">
              Explore the world's most breathtaking destinations with our
              handpicked travel experiences.
            </p>

            <div className="nav">
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="#packages" className="btn btn-success btn-lg fw-bold">
                Explore Packages
              </a>
              <a href="#about" className="btn btn-outline-light btn-lg fw-bold">
                Learn More
              </a>
            </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
