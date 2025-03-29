import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaDiscord, FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section full-width">
         <h1>KalyanTechSchool</h1>
          <p>Learn from industry experts and<br/> become job-ready in 6 months</p>
        </div>

        {/* Company Info */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/careers">Careers - We're hiring</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Social Connect</h4>
          <ul className="social-icons">
            <li><a href="#" target="_blank"><FaYoutube /> YouTube</a></li>
            <li><a href="#" target="_blank"><FaDiscord /> Discord</a></li>
            <li><a href="#" target="_blank"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="#" target="_blank"><FaInstagram /> Instagram</a></li>
            <li><a href="#" target="_blank"><FaFacebook /> Facebook</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> HIG, Chitrapuri Colony, Manikonda, Hyderabad, Telangana</p>
          <p><FaEnvelope /> <a href="mailto:contact@kalyantechschool.co">contact@kalyantechschool.co</a></p>
          <p><FaPhone /> <a href="tel:+919660806904">+91 9660806904</a></p>
          <p><FaWhatsapp /> <a href="https://wa.me/7660806904" target="_blank">WhatsApp us</a></p>
        </div>
      </div>

      {/* Copyright & Cookie Notice */}
      <div className="footer-bottom">
        <p>© KalyanTechSchool 2025. All rights reserved.</p>
        <p>
          When you visit or interact with our sites, services, or tools, we or our authorized service providers may use cookies for storing 
          information to help provide you with a better, faster, and safer experience and for marketing purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
