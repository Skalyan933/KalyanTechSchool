import React, { useState } from "react";
import axios from "axios";
import "../UserAuthentication/SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple clicks
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate Inputs
  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!/^[a-zA-Z\s]{3,30}$/.test(formData.name))
      return "Name must be 3-30 letters only";

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return "Enter a valid email address";

    if (!/^\d{10}$/.test(formData.mobile))
      return "Enter a valid 10-digit mobile number";

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.password))
      return "Password must be at least 6 characters and include letters & numbers";

    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; 
    setMessage("");
    const validationError = validateForm();
      if (validationError) {
        setMessage(validationError);
        return;
      }
  
      setIsSubmitting(true);
  
    try {
      const response = await axios.post("http://localhost:9090/auth/register", formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // For session-based authentication
      });
  
      if (response.data) {
        console.log("User Data Found:", response.data);
  
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(response.data));
  
        setMessage("Signup successful!");
        alert("Signup successful!");
  
        setTimeout(() => {
          window.dispatchEvent(new Event("storage")); // Update Navbar across tabs
          navigate("/");
        }, 1000);
      } else {
        setMessage(response.data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(error.response?.data?.message || "Something went wrong. Try again.");
    }
  };
  

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <div className="form-title">Sign Up</div>

      <div className="form-body">
        {/* Username */}
        <div className="input-group">
          <div className="input-wrapper">
            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
              <circle strokeWidth="1.5" stroke="currentColor" r="4" cy="8" cx="12"></circle>
              <path strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" d="M5 20C5 17.2386 8.13401 15 12 15C15.866 15 19 17.2386 19 20"></path>
            </svg>
            <input
              required
              placeholder="Username"
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email */}
        <div className="input-group">
          <div className="input-wrapper">
            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
              <path strokeWidth="1.5" stroke="currentColor" d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"></path>
            </svg>
            <input
              required
              placeholder="Email"
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="input-group">
          <div className="input-wrapper">
            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
              <rect stroke="currentColor" strokeWidth="1.5" x="7" y="2" width="10" height="20" rx="2"></rect>
              <circle stroke="currentColor" strokeWidth="1.5" cx="12" cy="18" r="1"></circle>
            </svg>
            <input
              required
              placeholder="Mobile Number"
              className="form-input"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <div className="input-wrapper">
            <svg fill="none" viewBox="0 0 24 24" className="input-icon">
              <rect stroke="currentColor" strokeWidth="1.5" x="4" y="11" width="16" height="10" rx="2"></rect>
              <path strokeWidth="1.5" stroke="currentColor" d="M8 11V7a4 4 0 1 1 8 0v4"></path>
            </svg>
            <input
              required
              placeholder="Password"
              className="form-input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="password-toggle"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
      </div>

      {/* Display Error Message */}
      {message && <p className="error-message">{message}</p>}

      {/* Submit Button */}
      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating Account..." : "Create Account"}
        <div className="button-glow"></div>
      </button>

      {/* Login Link */}
      <div className="form-footer">
        <a className="login-link" href="/login">
          Already have an account? <span>Login</span>
        </a>
      </div>
    </form>
  );
};

export default SignUp;
