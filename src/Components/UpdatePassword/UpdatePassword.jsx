import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });

  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || null
  );
  const [message, setMessage] = useState("");

  // Fetch token from URL & update state
  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setFormData((prev) => ({ ...prev, token: tokenFromUrl }));
      fetchUserDetails(tokenFromUrl); // Fetch user details
    }
  }, [searchParams]);

  // Fetch user details using the token
  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:9090/auth/user-details?token=${token}`
      );
      setUserDetails(response.data);
      localStorage.setItem("userDetails", JSON.stringify(response.data)); // Save to localStorage
    } catch (error) {
      console.error("Error fetching user details:", error);
      setMessage("Invalid or expired token.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:9090/auth/reset-password",
        {
          token: formData.token,
          newPassword: formData.password,
        }
      );

      if (response.status === 200) {
        setMessage(
          response.data.message || "Password updated successfully! Redirecting..."
        );

        // Re-fetch user details after password update
        fetchUserDetails(formData.token);

        // Redirect after 3 seconds
        setTimeout(() => navigate("/updatePassword"), 3000);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Failed to update password."
      );
    }
  };

  return (
    <div className="update-password-container">
      {/* Display User Details */}
      {userDetails && (
        <div className="user-details">
          <h3>User Details</h3>
          <p>
            <strong>Name:</strong> {userDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {userDetails.email}
          </p>
          <p>
            <strong>Mobile:</strong> {userDetails.mobile}
          </p>
          <h4>Purchased Courses:</h4>
          <ul>
            {userDetails.purchasedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Update Password Form */}
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Update Password</h2>

        <div className="input-container">
          <input
            type="text"
            name="token"
            placeholder="Enter Token"
            required
            value={formData.token}
            onChange={handleChange}
            readOnly // Token should not be changed manually
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="New Password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {message && <p className="message">{message}</p>}

        <button className="submit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
