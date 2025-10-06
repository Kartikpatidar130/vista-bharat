import React, { useState } from "react";
import "../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Success! Token stored.");
        localStorage.setItem("authToken", data.token);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
