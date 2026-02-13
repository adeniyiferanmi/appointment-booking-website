import React, { useContext } from "react";
import Header from "../Ui/Header";
import Footer from "../Ui/Footer";
import "../Styles/success.css";
import { BookingContext } from "../../Context/BookingContext";

const SuccessPage = () => {
  const {
    selectedTime,
    selectedDate,
    activeService,
    bookingDetails,
    bookingDetail,
  } = useContext(BookingContext);

  return (
    <div className="success-container">
      <div className="success-contain">
        <Header />
        <div className="success-card">
          <div className="checkmark">✓</div>

          <h2>Appointment Booked!</h2>
          <p className="checkmark-paragraph">
            Your appointment has been successfully scheduled.
          </p>
          <div className="success-service">
            <div>
              <p>Date:</p>
              {selectedDate && (
                <h5>
                  {selectedDate.day} {selectedDate.month} {selectedDate.num}
                </h5>
              )}
            </div>
            <div>
              <p>Time:</p>
              {selectedTime && <h5>{selectedTime}</h5>}
            </div>
            <div>
              <p>Duration:</p>
              {activeService && <h5>{activeService.time}</h5>}
            </div>
            <div>
              <p>Service:</p>
              {activeService && <h5>{activeService.title}</h5>}
            </div>
            <div className="buttons">
              <a href="/"><button className="back">Back to Home</button></a>
             <a href="/appointment"> <button className="appoint">Book another Appointment</button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
