import React from "react";
import "../Styles/footer.css";
import footerLogo from "../assets/output-onlinepngtools.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <img src={footerLogo} alt="" />
          <div>
            <div className="facebook">
              <i class="bi bi-facebook"></i>
            </div>
            <div className="tiktok">
              <i class="bi bi-tiktok"></i>
            </div>
            <div className="instagram">
              <i class="bi bi-instagram"></i>
            </div>
            <div className="twitter">
              <i class="bi bi-twitter"></i>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="footer-about" style={{
            borderLeft:"0"
          }}>
            <h2>About Us</h2>
            <p>
              We are passionate about delivering exceptional experiences and
              innovative solutions that make a difference. Our team combines
              expertise, creativity, and dedication to ensure every project
              exceeds expectations. At the heart of our work is a commitment to
              quality, professionalism, and building meaningful connections with
              our clients. We believe in turning ideas into reality and creating
              value that lasts.
            </p>
          </div>
          <div className="footer-about">
            <h2>Contact Us</h2>
            <div className="footer-icon">
              <i class="bi bi-geo-alt-fill"></i>
              <div>
                <p>123 Beauty Street, Lagos, Nigeria</p>
              </div>
            </div>
            <div className="footer-icon">
              <i class="bi bi-envelope-fill"></i>
              <div>
                <p>info@limadollz.com</p>
              </div>
            </div>
            <div className="footer-icon">
              <i class="bi bi-telephone-fill"></i>
              <div>
                <p>+234 801 234 5678</p>
              </div>
            </div>
          </div>
          <div className="footer-about">
            <h2>Opening Hours</h2>
            <p>Monday - Friday: <span>9:00 AM - 6:00 PM</span></p>
            <p>Saturday:    <span>10:00 AM - 4:00 PM</span></p>
            <p>Sunday: <span>Closed</span></p>
          </div>
        </div>
        <div>
          <h3>Copyright © 2026, Limadollz Powered by fera.dev</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
