import React from "react";
import "../styles.css";
import { FaBus, FaUser, FaCalendarAlt, FaChair, FaTicketAlt, FaQrcode } from "react-icons/fa";

const Ticket = ({ bookingDetails }) => {
  if (!bookingDetails || !bookingDetails.payment) {
    return <div className="ticket-container">No ticket available. Please complete the payment.</div>;
  }

  return (
    <div className="ticket-container">
      <h2>🎟 Bus Ticket</h2>
      
      <div className="ticket-section">
        <div className="ticket-row">
          <FaBus className="icon" />
          <p><strong>Bus:</strong> {bookingDetails.bus?.name}</p>
        </div>
        <div className="ticket-row">
          <FaCalendarAlt className="icon" />
          <p><strong>Date:</strong> {bookingDetails.date}</p>
        </div>
        <div className="ticket-row">
          <FaUser className="icon" />
          <p><strong>Passenger:</strong> {bookingDetails.passenger?.name}</p>
        </div>
        <div className="ticket-row">
          <FaChair className="icon" />
          <p><strong>Seat:</strong> {bookingDetails.seat}</p>
        </div>
        <div className="ticket-row">
          <FaTicketAlt className="icon" />
          <p><strong>Ticket No:</strong> #{Math.floor(Math.random() * 100000)}</p>
        </div>
      </div>

      <div className="qr-code">
        <FaQrcode className="qr-icon" />
        <p>Scan for Verification</p>
      </div>

      <button className="download-btn">Download Ticket</button>
    </div>
  );
};

export default Ticket;
