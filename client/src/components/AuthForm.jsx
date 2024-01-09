import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, isAdmin } from "../auth"; // Adjust the path based on your project structure
import "../AuthForm.css";

const AuthForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      login(password);

      if (isAdmin()) {
        navigate("/admin_page");
      } else {
        navigate("/user");
      }

      onLogin();
    } catch (error) {
      alert("Invalid password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          <span>Login</span>
        </button>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default AuthForm;
