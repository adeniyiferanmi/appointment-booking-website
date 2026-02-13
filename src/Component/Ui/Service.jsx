import React, { useContext, useState } from "react";
import { BookingContext } from "../../Context/BookingContext";

const Service = () => {
    const { activeService, setActiveService } = useContext(BookingContext);
  const services = [
    {
      id: 1,
      title: "Hair Services",
      description:
        "From flawless installations to detailed braiding, we provide expert hair styling tailored to your look. Our services include wig installations, closures, frontals, revamps, and all braiding styles—finished with precision and care.",
      time: "2 - 4 hrs",
      price: "₦ 15000+",
      icon: "bi bi-scissors",
    },
    {
      id: 2,
      title: "Makeup Artistry",
      description:
        "Professional makeup services for every occasion. Whether soft glam or full glam, each look is customized to enhance your features and leave you confident, polished, and camera-ready.",
      time: "2 - 4 hrs",
      price: "₦ 35000+",
      icon: "bi bi-brush",
    },
    {
      id: 3,
      title: "Brows & Lashes",
      description:
        "Define your brows and enhance your lashes with our semi-permanent treatments. Designed for natural-looking, long-lasting results that elevate your beauty with minimal daily effort.",
      time: "2 - 4 hrs",
      price: "₦ 25000+",
      icon: "bi bi-eye",
    },
    {
      id: 4,
      title: "Semi-Permanent Tattoos",
      description:
        "Express yourself with beautifully crafted semi-permanent tattoos. Our designs are applied with precision, hygiene, and attention to detail—perfect for stylish, commitment-free looks.",
      time: "2 - 4 hrs",
      price: "₦ 45000+",
      icon: "bi bi-vector-pen",
    },
  ];
  return (
    <div>
      <div>
        <h3>Choose Your Service</h3>
        <p className="service-paragraph">
          Select the service you'd like to book
        </p>
        <div className="service-display">
          {services.map((service) => (
            <div className="service-cards" key={service.id}>
              <div className="appointment-card">
                <div
                  className="appointment-icon"
                  key={service.id}
                  onClick={() => setActiveService(service)}
                  style={{
                    border:
                      activeService?.id=== service.id
                        ? "2px solid rgb(138, 32, 138)"
                        : "none",
                  }}
                >
                  <i class={service.icon}></i>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="time-price">
                      <div>
                        <i class="bi bi-stopwatch"></i>
                        <span>{service.time}</span>
                      </div>
                      <div>
                        <p>{service.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Service;
