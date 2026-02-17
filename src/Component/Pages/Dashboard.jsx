import React from "react";
import Header from "../Ui/Header";
import "../Styles/dashboard.css";
import img1 from "../assets/c76cce2c-54ab-43ec-9aa9-1f96c8a5e24a.png";
import img2 from "../assets/fc15375f-65e9-4a62-9781-fefaaaa46058.png";
import img3 from "../assets/17c204c1-4e44-4957-b07a-ba224bdbd0be.png";
import img4 from "../assets/31d32104-9eba-45cb-adfa-083007210510.png";

import gallery1 from "../assets/istockphoto-2210288471-612x612.jpg";
import gallery2 from "../assets/istockphoto-1952511070-612x612.jpg";
import gallery3 from "../assets/istockphoto-1277309408-612x612.jpg";
import gallery4 from "../assets/shopping.webp";
import gallery5 from "../assets/images (1).jpg";
import gallery6 from "../assets/download (3).jpg";
import gallery7 from "../assets/photo-1522335789203-aabd1fc54bc9.avif";
import gallery8 from "../assets/shopping (1).webp";
import gallery9 from "../assets/images.jpg";
import gallery10 from "../assets/download (3).jpg";
import gallery11 from "../assets/download (5).jpg";
import gallery12 from "../assets/240_F_394216195_0aCZg5Gl3zHNAtwCEZI9igJRoqmBXyqN.jpg";
import gallery13 from "../assets/download (6).jpg";
import gallery14 from "../assets/download (7).jpg";
import gallery15 from "../assets/download (8).jpg";
import gallery16 from "../assets/download (9).jpg";
import gallery17 from "../assets/images (2).jpg";
import gallery18 from "../assets/images (3).jpg";
import Footer from "../Ui/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Header />
      </div>



      <div className="dashboard-section1">
        <div className="dashboard-section1-content">
          <span className="welcome">Welcome to Limadollz</span>
          <h1>
            Where Beauty Meets
            <span> Artistry</span>
          </h1>
          <p>
            Step into a world of refined elegance. From precision brows to
            transformative hair artistry, we craft looks that celebrate your
            unique radiance.
          </p>
          <div className="content-button">
            <a href="/appointment"><button className="button1">Book Appointment</button></a>
            <a href="#service"><button className="button2">View Services</button></a>
          </div>
        </div>
      </div>
      <div className="dashboard-section2" id="service">
        <div className="dashboard-section2-content">
          <h1>Our Signature Services</h1>
          <p className="paragraph">Curated for Perfection</p>
          <div className="dashboard-container">
            <div className="dashboard-card">
              <div className="dashboard-icon">
                <i class="bi bi-scissors"></i>
              </div>
              <h2>Hair Services</h2>
              <p>
                From flawless installations to detailed braiding, we provide
                expert hair styling tailored to your look. Our services include
                wig installations, closures, frontals, revamps, and all braiding
                styles—finished with precision and care.
              </p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-icon">
                <i class="bi bi-brush"></i>
              </div>
              <h2>Makeup Artistry</h2>
              <p>
                Professional makeup services for every occasion. Whether soft
                glam or full glam, each look is customized to enhance your
                features and leave you confident, polished, and camera-ready.
              </p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-icon">
                <i class="bi bi-eye"></i>
              </div>
              <h2> Brows & Lashes</h2>
              <p>
                Define your brows and enhance your lashes with our
                semi-permanent treatments. Designed for natural-looking,
                long-lasting results that elevate your beauty with minimal daily
                effort.
              </p>
            </div>
            <div className="dashboard-card">
              <div className="dashboard-icon">
                <i class="bi bi-vector-pen"></i>
              </div>
              <h2>Semi-Permanent Tattoos</h2>
              <p>
                Express yourself with beautifully crafted semi-permanent
                tattoos. Our designs are applied with precision, hygiene, and
                attention to detail—perfect for stylish, commitment-free body
                art.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section3" id="team">
        <div className="dashboard-section3-width">
          <div className="dashboard-section3-text">
            <h1>Our Team</h1>
            <p>Meet Our stylist</p>
          </div>
          <div className="dashboard-section3-content">
            <div className="dashboard-team">
              <img src={img1} alt="" />
              <div>
                <h1>Emma</h1>
                <h4>Senior Hair Stylist</h4>
                <h6>10+ experience</h6>
                <p>Braiding and extension</p>
              </div>
            </div>
            <div className="dashboard-team">
              <img src={img2} alt="" />
              <div>
                <h1>Maya</h1>
                <h4>Makeup Artist</h4>
                <h6>5+ experience</h6>
                <p>Glam and Bridal Specialist</p>
              </div>
            </div>
            <div className="dashboard-team">
              <img src={img3} alt="" />
              <div>
                <h1>Lisa</h1>
                <h4>Brow and Lash extension</h4>
                <h6>5+ experience</h6>
                <p>Microblading & Lash Lifts</p>
              </div>
            </div>
            <div className="dashboard-team">
              <img src={img4} alt="" />
              <div>
                <h1>Amy</h1>
                <h4>Tattoo Artist </h4>
                <h6>4+ experience</h6>
                <p>Semi-Permanent Tattoo Artist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section4" id="gallery">
        <div className="dashboard-section4-content">
          <div>
            <h1>Our Gallery</h1>
            <p>An Incredible Beauty Experience</p>
          </div>
          <div className="dashboard-gallery">
            <div className="gallery-image">
              <img src={gallery1} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery2} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery3} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery4} alt="" />
              <div className="gallery-overlay">
                <span>Tatoo</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery6} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>

            <div className="gallery-image">
              <img src={gallery12} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery5} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery7} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery9} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery8} alt="" />
              <div className="gallery-overlay">
                <span>Tatoo</span>
              </div>
            </div>

            <div className="gallery-image">
              <img src={gallery1} alt="" />
              <div className="gallery-overlay">
                <span>Hair</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery11} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery10} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery13} alt="" />
              <div className="gallery-overlay">
                <span>Make Up</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery14} alt="" />
              <div className="gallery-overlay">
                <span>Tatoo</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery15} alt="" />
              <div className="gallery-overlay">
                <span>Brows and Lashes</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery16} alt="" />
              <div className="gallery-overlay">
                <span>Brows and Lashes</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery17} alt="" />
              <div className="gallery-overlay">
                <span>Brows and Lashes</span>
              </div>
            </div>
            <div className="gallery-image">
              <img src={gallery18} alt="" />
              <div className="gallery-overlay">
                <span>Brows and Lashes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section5">
        <div className="dashboard-section5-content">
          <h1>Reviews</h1>
          <p className="review-paragraph">What Our Clients Say</p>
          <div className="review-section">
            <div className="review-card">
              <p className="review-text">
                “Absolutely amazing service. My hair came out perfect and the
                stylist was very professional.”
              </p>
              <div className="review-footer">
                <img src={gallery3} alt="Client" />
                <div>
                  <h4>Sarah A.</h4>
                  <span>Hair Styling</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <p className="review-text">
                “The makeup lasted all day and looked flawless. I received so
                many compliments.”
              </p>
              <div className="review-footer">
                <img src={gallery6} alt="Client" />
                <div>
                  <h4>Blessing O.</h4>
                  <span>Makeup</span>
                </div>
              </div>
            </div>

            <div className="review-card">
              <p className="review-text">
                “Very clean environment and professional brow work. I love my
                results.”
              </p>
              <div className="review-footer">
                <img src={gallery16} alt="Client" />
                <div>
                  <h4>Amaka K.</h4>
                  <span>Brow & Lash</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">
                “Very professional tattoo service. Clean environment and precise
                work. I love my tattoo.”
              </p>
              <div className="review-footer">
                <img src={gallery4} alt="Client" />
                <div>
                  <h4>Daniel T.</h4>
                  <span>Tattoo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section6" id="price">
        <div className="dashboard-section6-content">
          <h1>Our Pricing</h1>
          <p className="pricing-paragraph">
            Transparent & Affordable Beauty Services
          </p>
          <div className="pricing-list">
            <div className="pricing-row">
              <span>Hair Styling</span>
              <span className="price">From ₦15,000</span>
            </div>

            <div className="pricing-row">
              <span>Makeup</span>
              <span className="price">From ₦20,000</span>
            </div>

            <div className="pricing-row">
              <span>Brows & Lashes</span>
              <span className="price">From ₦25,000</span>
            </div>

            <div className="pricing-row tattoo">
              <span>Tattoo</span>
              <span className="price">From ₦30,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section7" id="booking">
        <div className="dashboard-section7-content">
          <h1>Book Your Appointment</h1>
          <p className="appointment-paragraph">
            Book your appointment now and experience our premium beauty
            services.
          </p>
          <div className="appointment-section">
            <div className="appointment-text">
              <h2>Ready to Glow?</h2>
              <p>
                Ready to Glow? Secure your spot at Limadollz Beauty World.
                Appointments are limited to ensure personalized attention for
                every client.
              </p>
             <a href="/appointment"><button>Book Appointment</button></a>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
