import React, { createContext, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const BookingContext = createContext();
const BookingProvider = ({ children }) => {
  const [activeService, setActiveService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingDetail,setBookingDetail] = useState(false)
  const [step, setStep] = useState(1);
  const baseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()

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
    setBookingDetail(true)
    try {
      const booking = await fetch(`${baseUrl}/booking`,{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const res =await booking.json()
      console.log(res);
      
      if (booking.ok) {
        toast.success("appointment booked successfully")
        navigate("/successpage")
        alert("clicked");

      }
    } catch (error) {
      toast.error("error occured")
      console.log(error);
      alert("clicked");

      
    }finally{
      setBookingDetail(false)
    }
    
  }
  

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
    bookingDetail
  };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingProvider;
