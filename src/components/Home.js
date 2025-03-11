import React, { useState } from "react";
import "../styles.css"; // Ensure the CSS file is imported

const Home = ({ setBookingDetails, nextStep }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const searchBuses = () => {
    setBookingDetails((prev) => ({ ...prev, from, to, date }));
    nextStep();
  };

  return (
    
    <div className="home-container">
      <div className="header">
         <h1>Easy Board...</h1>
        <h2>India's No.1 Online Bus Ticket Booking Site</h2>
      </div>
      <div className="search-box">
        <div className="input-group">
          <label>From</label>
          <input type="text" placeholder="Enter City" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div className="input-group">
          <label>To</label>
          <input type="text" placeholder="Enter Destination" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button className="search-btn" onClick={searchBuses}>Search Buses</button>
      </div>
    </div>
  );
};

export default Home;
