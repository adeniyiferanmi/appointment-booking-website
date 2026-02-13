import React, { useContext } from "react";
import { BookingContext } from "../../Context/BookingContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const Details = () => {
  const {
    selectedTime,
    selectedDate,
    activeService,
    bookingDetails,
    bookingDetail,
    prevStep,
  } = useContext(BookingContext);
  
  const bookingShema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().required("email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingShema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    bookingDetails(data);
  };
  return (
    <div>
      {bookingDetail !== undefined &&(
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-content">
            <div className="form-container">
              <div>
                <h2>Your Details</h2>
                <div className="details-form">
                  <div>
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      {...register("fullName")}
                    />
                    {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      placeholder="Your@gmail.com"
                      {...register("email")}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                  </div>
                  <div>
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="number"
                      placeholder="+234 9014 541 123"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}

                  </div>
                  <div>
                    <label htmlFor="">Special Request</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Any special request or notes..."
                      {...register("message")}
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message.message}</p>}

                  </div>
                </div>
              </div>
            </div>
            <div className="booking-container">
              <div>
                <h2>Booking Summary</h2>
                <div className="booking-content">
                  <div>
                    <p>Service</p>
                    {activeService && <h5>{activeService.title}</h5>}
                  </div>
                  <div>
                    <p>Date</p>
                    {selectedDate && (
                      <h5>
                        {selectedDate.day} {selectedDate.month}{" "}
                        {selectedDate.num}
                      </h5>
                    )}
                  </div>
                  <div>
                    <p>Time</p>
                    {selectedTime && <h5>{selectedTime}</h5>}
                  </div>
                  <div style={{ paddingBottom: "20px" }}>
                    <p>Duration</p>
                    {activeService && <h5>{activeService.time}</h5>}
                  </div>
                  <div className="total-price">
                    <h4>Starting From</h4>
                    {activeService && <h1>{activeService.price}</h1>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-divs">
            <div className="back-button-div">
              <button className="back-button" onClick={prevStep} type="button">
                <i class="bi bi-chevron-left"></i> Back
              </button>
            </div>
            <div className="service-button-div confirm">
              <button className="service-button" type="submit">
                {bookingDetail === true ? (
                  // <i className="bi bi-arrow-clockwise animate-spin"></i>
                 `loading....`
                ) : (
                  "CONFIRM BOOKING"
                )}
                <i class="bi bi-check2" style={{ fontSize: "20px" }}></i>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Details;
