import React, { useState } from "react";
import "../styles.css";

const SeatSelection = ({ bookingDetails, setBookingDetails, nextStep, prevStep }) => {
  const RightSeats = [
    ["R1", "R3", "R5", "R7", "R9", "R11", "R13"],
    ["R2", "R4", "R6", "R8", "R10", "R12", "R14"]
  ];

  const LeftSeats = [
    ["L1", "L3", "L5", "L7", "L9", "L11", "L13"],
    ["L2", "L4", "L6", "L8", "L10", "L12", "L14"]
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (!seat || seat === "E") return;

    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((s) => s !== seat)
        : [...prevSelected, seat]
    );
  };

  const confirmSeats = () => {
    setBookingDetails((prev) => ({ ...prev, seat: selectedSeats }));
    nextStep();
  };

  return (
    <div className="seat-selection-container">
      <h2>Select Your Seat</h2>
      <p className="seat-instructions">Click on an Available seat to proceed with your transaction.</p>

      <div className="deck">
        <h3>Left Seats</h3>
        <div className="seat-grid">
          {LeftSeats.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seat, index) => (
                <div
                  key={index}
                  className={`seat ${seat ? "available" : "empty"} ${
                    selectedSeats.includes(seat) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="deck">
        <h3>Right Seats</h3>
        <div className="seat-grid">
          {RightSeats.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seat, index) => (
                <div
                  key={index}
                  className={`seat ${seat ? "available" : "empty"} ${
                    selectedSeats.includes(seat) ? "selected" : ""
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="seat-buttons">
        <button className="back-btn" onClick={prevStep}>Back</button>
        <button className="confirm-btn" onClick={confirmSeats}>Confirm Seats</button>
      </div>
    </div>
  );
};

export default SeatSelection;
