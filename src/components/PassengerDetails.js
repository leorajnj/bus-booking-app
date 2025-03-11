import React, { useState } from "react";
import "../styles.css";

const PassengerDetails = ({ setBookingDetails, nextStep, prevStep }) => {
  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassenger((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setBookingDetails((prev) => ({ ...prev, passenger }));
    nextStep();
  };

  return (
    <div className="passenger-container">
      <h2>Passenger Details</h2>
      <div className="passenger-info">
        <h3>Passenger Information</h3>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={passenger.name} onChange={handleChange} placeholder="Enter Name" />
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>Gender</label>
            <div className="gender-options">
              <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            </div>
          </div>
          <div className="input-group">
            <label>Age</label>
            <input type="number" name="age" value={passenger.age} onChange={handleChange} placeholder="Enter Age" />
          </div>
        </div>
      </div>

      <div className="contact-info">
        <h3>Contact Details</h3>
        <p className="info-alert">Your ticket will be sent to these details</p>
        <div className="input-group">
          <label>Email ID</label>
          <input type="email" name="email" value={passenger.email} onChange={handleChange} placeholder="Enter Email ID" />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <div className="phone-input">
            <select>
              <option>+91</option>
            </select>
            <input type="tel" name="mobile" value={passenger.mobile} onChange={handleChange} placeholder="Enter Mobile Number" />
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Total Amount: <strong>INR 760.00</strong> (*Exclusive of Taxes)</p>
        <button className="back-btn" onClick={prevStep}>Back</button>
        <button className="pay-btn" onClick={handleSubmit}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default PassengerDetails;
