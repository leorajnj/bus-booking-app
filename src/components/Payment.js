import React, { useState } from "react";
import "../styles.css";

const Payment = ({ setBookingDetails, nextStep, prevStep }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upi: "",
    netBanking: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setBookingDetails((prev) => ({ ...prev, payment: true }));
    nextStep();
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <div className="payment-options">
        <button className={paymentMethod === "card" ? "active" : ""} onClick={() => setPaymentMethod("card")}>
          Credit/Debit Card
        </button>
        <button className={paymentMethod === "upi" ? "active" : ""} onClick={() => setPaymentMethod("upi")}>
          UPI
        </button>
        <button className={paymentMethod === "netBanking" ? "active" : ""} onClick={() => setPaymentMethod("netBanking")}>
          Net Banking
        </button>
      </div>

      {paymentMethod === "card" && (
        <div className="payment-form">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={paymentDetails.cardNumber} onChange={handleChange} placeholder="Enter Card Number" />
          <div className="input-row">
            <div>
              <label>Expiry</label>
              <input type="text" name="expiry" value={paymentDetails.expiry} onChange={handleChange} placeholder="MM/YY" />
            </div>
            <div>
              <label>CVV</label>
              <input type="password" name="cvv" value={paymentDetails.cvv} onChange={handleChange} placeholder="CVV" />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "upi" && (
        <div className="payment-form">
          <label>UPI ID</label>
          <input type="text" name="upi" value={paymentDetails.upi} onChange={handleChange} placeholder="Enter UPI ID" />
        </div>
      )}

      {paymentMethod === "netBanking" && (
        <div className="payment-form">
          <label>Select Bank</label>
          <select name="netBanking" value={paymentDetails.netBanking} onChange={handleChange}>
            <option value="">Select Bank</option>
            <option value="SBI">State Bank of India</option>
            <option value="HDFC">HDFC Bank</option>
            <option value="ICICI">ICICI Bank</option>
          </select>
        </div>
      )}

      <div className="footer">
        <button className="back-btn" onClick={prevStep}>Back</button>
        <button className="pay-btn" onClick={handleSubmit}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Payment;
