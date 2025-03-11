import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import BusList from "./components/BusList";
import SeatSelection from "./components/SeatSelection";
import PassengerDetails from "./components/PassengerDetails";
import Payment from "./components/Payment";
import Ticket from "./components/Ticket";

const App = () => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    from: "",
    to: "",
    bus: null,
    seat: [],
    passenger: { name: "", age: "", mobile: "", email: "", gender: "" },
    payment: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
      <div className="content-container">
        {step === 1 && <Home setBookingDetails={setBookingDetails} nextStep={nextStep} />}
        {step === 2 && <BusList setBookingDetails={setBookingDetails} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <SeatSelection bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <PassengerDetails setBookingDetails={setBookingDetails} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Payment setBookingDetails={setBookingDetails} nextStep={nextStep} prevStep={prevStep} />}
        {step === 6 && <Ticket bookingDetails={bookingDetails} />}
      </div>
  );
};

export default App;