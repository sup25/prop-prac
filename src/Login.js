import React, { useState } from "react";
import Appform from "./Appform";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (formData) => {
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <Appform onSubmit={handleSubmit} name={name} email={email} />
    </div>
  );
}
