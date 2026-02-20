import React, { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const BookingContext = createContext();
const BookingProvider = ({ children }) => {
  const [activeService, setActiveService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingDetail, setBookingDetail] = useState(false);
  const [step, setStep] = useState(1);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const generateDates = (numDays = 20) => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < numDays; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      dates.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        num: date.getDate(),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        fullDate: date.toDateString(),
      });
    }
    return dates;
  };
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const availableDates = useMemo(() => generateDates(20), []);

  const bookingDetails = async (data) => {
    setBookingDetail(true);
    const completeBooking = {
      ...data,
      service: localStorage.getItem("booking_service"),
      price: localStorage.getItem("booking_price"),
      day: localStorage.getItem("booking_day"),
      month: localStorage.getItem("booking_month"),
      num: localStorage.getItem("booking_num"),
      time: localStorage.getItem("booking_time"),
    };
    try {
      const booking = await fetch(`${baseUrl}/booking`, {
        method: "POST",
        body: JSON.stringify(completeBooking),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await booking.json();

      if (res.status === "successful" || res.status === "success") {
        const newBookingId = res.booking._id;
        
        const emailres = await fetch(
          `${baseUrl}/booking/send-email/${newBookingId}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: data.email }),
          },
        );
        const emailData = await emailres.json();

        if (emailData.status === "success") {
          toast.success("appointment booked successfully");
          navigate("/successpage");
          localStorage.clear();
        } 
      }
    } catch (error) {
      toast.error("error occured");
    } finally {
      setBookingDetail(false);
    }
  };

  const value = {
    setActiveService,
    setStep,
    setSelectedDate,
    setSelectedTime,
    bookingDetails,
    nextStep,
    prevStep,
    activeService,
    availableDates,
    selectedTime,
    selectedDate,
    step,
    bookingDetail,
  };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingProvider;
