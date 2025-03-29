import React, { useState } from 'react';
import "../ForgetPassword/ForgetPwd.css";
import axios from "axios";  // Import Axios
import { useNavigate } from 'react-router-dom';

const ForgetPwd = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9090/auth/forgot-password", 
        { email },  // Send email inside an object
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        setMessage(response.data.message || "Reset link sent to your email. Redirecting...");
        alert(response.data.message || "Check your email for the reset link.");
        setTimeout(() => navigate("/"), 500); // Redirect to home after 0.5 seconds
    }
    } catch (error) {
      console.error("Forget password error:", error);
  
      if (error.response) {
        setMessage(error.response.data.message || "Error sending reset link.");
        alert(error.response.data.message || "Error sending reset link.");
      } else {
        setMessage("Network error. Please try again.");
        alert("Network error. Please try again.");
      }
    }
  };
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Forget Password</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            value={email} 
            onChange={handleChange} 
          />
          <p>Enter Your Email, You Will Get a Password Reset Link</p>
        </div>

        <button className="form-submit-btn" type="submit">Send Email</button>
        {message && <p className="message">{message}</p>}

        <p className="signup-link">
          Don't have an account?
          <a href="/SignUp" className="signup-link link"> Sign up now</a>
        </p>
      </form>
    </div>
  );
};

export default ForgetPwd;
