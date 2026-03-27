import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h6 className="contact-subtitle">Get in Touch</h6>
            <h2 className="contact-title">Plan Your Next Escape</h2>
            <p className="contact-text">
              Ready to start your journey? Our travel consultants are available
              24/7 to help you design the perfect itinerary.
            </p>

            <div className="info-item">
              <div className="info-icon primary">📍</div>
              <div>
                <h5>Head Office</h5>
                <p>123 Travel Lane, Adventure City</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon success">📞</div>
              <div>
                <h5>Phone</h5>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon warning">✉️</div>
              <div>
                <h5>Email</h5>
                <p>hello@wanderlust-travels.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" />
                </div>
              </div>

              <div className="form-group">
                <label>Interested Destination</label>
                <select>
                  <option>Select destination</option>
                  <option>Bali</option>
                  <option>Paris</option>
                  <option>Tokyo</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="4"></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
