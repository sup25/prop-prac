import React, { useState } from "react";
import "./appform.css";

export default function Appform({ onSubmit, name, email }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phoneNumber, message });
  };

  return (
    <>
      <div className="form-container">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={() => {}}
          readOnly
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={() => {}}
          readOnly
        />
        <input
          className="form-input"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          className="form-input"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="form-submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
