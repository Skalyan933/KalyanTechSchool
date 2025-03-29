import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../UserAuthentication/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:9090/auth/login", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, //For session-based authentication
      });

      if (result.data) {
        console.log("User Data Found:", result.data);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(result.data));

        setMessage("Login successful!");
        alert("Login successful!");

        setTimeout(() => {
          window.dispatchEvent(new Event("storage")); // Update Navbar across tabs
          navigate("/");
        }, 1000);
      } else {
        setMessage(result.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">Login</h2>
      <div className="input-container">
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      </div>

      <div className="input-container">
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      </div>

      {message && <p className="message">{message}</p>}

      <button className="submit" type="submit">
        Login
      </button>

      <p className="signup-link">
        <a href="/ForgetPwd">Forgot Password?</a>
      </p>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
