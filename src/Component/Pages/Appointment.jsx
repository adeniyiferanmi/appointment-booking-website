import React, { useContext } from "react";
import Header from "../Ui/Header";
import "../Styles/appointment.css";
import Service from "../Ui/Service";
import TimePrice from "../Ui/TimePrice";
import Details from "../Ui/Details";
import { BookingContext } from "../../Context/BookingContext";

const Appointment = () => {
  const { step, setStep, activeService, selectedTime, selectedDate,prevStep,
    nextStep
   } =
    useContext(BookingContext);

  

  return (
    <div >
      <div>
        <Header />
      </div>
      <div className="appointment-page">
        <div className="appointment-texts">
          <h1>
            <span>Book Your</span>
            <br />
            Appointment
          </h1>
          <p>
            Schedule your appointment with ease using our online booking system.
            Choose your preferred date and time, and we'll take care of the
            rest.
          </p>
        </div>
      </div>
      <div className="appointment-section1" >
        <div className="appointment-displays " >
          <h6>Book Your Appointment</h6>
          <div className="appointment-headings">
            <div className={`step-block ${ step === 1 ? "after" : ""}`}>
              <div
                className={`circle ${step > 1 ? "done" : step === 1 ? "active" : ""}`}
              >
                {step > 1 ? <i className="bi bi-check"></i> : "1"}
              </div>
              <span
                className={`appointment-span ${step === 1 ? "text-active" : ""}`}
              > 
                Select Service 
              </span>
            </div>
            <div className={`step-block ${ step === 2 ? "after" : ""}`}>
              <div
                className={`circle ${step > 2 ? "done" : step === 2 ? "active" : ""}`}
              >
                {step > 2 ? <i className="bi bi-check"></i> : "2"}
              </div>
              <span
                className={`appointment-span ${step === 2 ? "text-active" : ""}`}
              >
                {" "}
                Date & Time
              </span>
            </div>
            <div className="step">
              <div className={`circle ${step === 3 ? " active" : ""}`}>3</div>
              <span className={`appointment-span ${step === 3 ? "text-actives" : ""}`}>
                {" "}
                Your Details
              </span>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(248,250,252)" }}>
            <div>
              {step === 1 && <Service />}
              {step === 1 && (
                <div className="service-button-div">
                  <button
                    className="service-button"
                    disabled={activeService === null}
                    onClick={nextStep}
                  >
                    Continue <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              )}
            </div>
            {step === 2 && <TimePrice />}
            {step === 2 && (
              <div className="button-divs" >
                <div className="back-button-div">
                  <button className="back-button" onClick={prevStep}>
                    <i class="bi bi-chevron-left"></i> Back
                  </button>
                </div>
                <div className="service-button-div">
                  <button
                    className="service-button"
                    disabled={selectedTime === null}
                    onClick={nextStep}
                  >
                    Continue <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
            )}
            {step === 3 && <Details />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
