import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || null);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      setUserData(JSON.parse(localStorage.getItem("userData")) || null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    window.dispatchEvent(new Event("storage")); // Notify all tabs
    navigate("/");
  };

  return (
    <nav className="navbar_main">
      <div className="navbar_container">
        <div className="nav_logo">
          <h2>KalyanTechSchool</h2>
        </div>

        <div className="nav_menu">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>
                Courses
              </NavLink>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/my-courses" className={({ isActive }) => (isActive ? "active" : "")}>
                    My Courses
                  </NavLink>
                </li>
                <li>
                <span className="user-name">Hello, {userData?.user?.name} 👋</span>
                </li>
                <li>
                  <button className="nbtn" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                    <button className="nbtn">Login</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>
                    <button className="nbtn">Sign Up</button>
                  </NavLink>
                </li>
              </>
            )}

            <li>
              <button className="nbtn">
                <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
                  WhatsApp/Call
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
