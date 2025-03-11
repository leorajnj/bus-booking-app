import React from "react";
import "../styles.css";

const BusList = ({ setBookingDetails, nextStep, prevStep }) => {
  const buses = [
    {
      id: 1,
      name: "NPS Navigator",
      type: "A/C Sleeper (2+1)",
      departure: "23:50",
      duration: "06h 20m",
      arrival: "06:10",
      date: "27-Feb",
      rating: 4.7,
      reviews: 290,
      price: 760,
      seatsAvailable: 28,
      windows: 14,
    },
    {
      id: 2,
      name: "LEO Travels",
      type: "Non A/C Seater / Sleeper (2+1)",
      departure: "00:15",
      duration: "06h 15m",
      arrival: "06:30",
      date: "27-Feb",
      rating: 4.5,
      reviews: 84,
      price: 540,
      seatsAvailable: 28,
      windows: 14,
    },
  ];

  const selectBus = (bus) => {
    setBookingDetails((prev) => ({ ...prev, bus }));
    nextStep();
  };

  return (
    <div className="bus-list-container">
      <h2>Available Buses</h2>
      {buses.map((bus) => (
        <div className="bus-card" key={bus.id}>
          <div className="bus-info">
            <h3>{bus.name}</h3>
            <p className="bus-type">{bus.type}</p>
            <div className="bus-timing">
              <span className="departure">{bus.departure}</span>
              <span className="duration">{bus.duration}</span>
              <span className="arrival">{bus.arrival}</span>
            </div>
            <p className="bus-date">{bus.date}</p>
            <div className="bus-rating">
              <span>⭐ {bus.rating}</span> <span>({bus.reviews} reviews)</span>
            </div>
          </div>
          <div className="bus-details">
            <p className="bus-price">
              <span className="old-price"></span> INR {bus.price}
            </p>
            <p className="seat-info">{bus.seatsAvailable} Seats available</p>
            <p className="window-info">{bus.windows} Window</p>
            <button className="view-seats-btn" onClick={() => selectBus(bus)}>
              VIEW SEATS
            </button>
          </div>
        </div>
      ))}
      <button className="back-btn" onClick={prevStep}>Back</button>
    </div>
  );
};

export default BusList;
