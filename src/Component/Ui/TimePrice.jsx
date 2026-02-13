import React, { useContext } from "react";
import { BookingContext } from "../../Context/BookingContext";

const TimePrice = () => {
  const {
    activeService,
    selectedDate,
    setSelectedDate,
    availableDates,
    selectedTime,
    setSelectedTime,
  } = useContext(BookingContext);
  const time = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  return (
    <div>
      <div>
        <div className="time-price-header">
          <h3>Pick Date & Time</h3>
          {activeService && (
            <p>
              {activeService.title} . {activeService.price}
            </p>
          )}
        </div>
        <div className="time-container">
          <span>
            <i class="bi bi-calendar-event"></i> Select Date
          </span>
          <div className="date-content">
            {availableDates.map((date, index) => (
              <div
                // className='date-box'
                key={index}
                onClick={() => setSelectedDate(date)}
                className={
                  selectedDate?.fullDate === date.fullDate
                    ? "selected"
                    : "date-box"
                }
              >
                <h4>{date.day}</h4>
                <h2>{date.num}</h2>
                <h4>{date.month}</h4>
              </div>
            ))}
          </div>
        </div>
        {selectedDate && (
          <div className="date-container">
            <div>
              <div className="day-container">
                <h5>
                  <i class="bi bi-stopwatch"></i> Available Times for{" "}
                  {selectedDate.day}, {selectedDate.month} {selectedDate.num}
                </h5>
                <div>
                  <div className="day-content">
                    {time.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={
                          selectedTime === slot ? "selected-time" : "time-box"
                        }
                      >
                        <p>{slot}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default TimePrice;
