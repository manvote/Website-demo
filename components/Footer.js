import React from "react";
import "./footer.css";
import logo from "../assets/manovate-logo.png";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { FaGlobe } from "react-icons/fa6";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
<div className="footer-top">

  {/* BRAND + CONTACT */}
  <div className="footer-brand">
    <img src={logo} alt="Manovate Technologies" className="footer-logo" />

    <div className="footer-links">
      <p>
  <FaGlobe />
  https://manovate.co.in
</p>


      <p className="footer-contact">
        <FaEnvelope /> info@manovate.co.in
      </p>

      <p className="footer-contact">
        <FaLocationDot />
        Agnitio Park, 7th Floor, No: 141, Kandhanchavadi, Rajiv Gandhi Salai, OMR, Perungudi, Chennai - 600096
      </p>
    </div>
  </div>

  {/* SERVICES */}
  <div className="footer-col">
    <h4>Services</h4>
    <ul>
      <li>Mobile Application Development</li>
      <li>Cloud & Infrastructure Service</li>
      <li>AI & Automation Solutions</li>
      <li>Custom Enterprise Software</li>
      <li>Business & Strategy Consulting</li>
    </ul>
  </div>

  {/* PRODUCTS */}
  <div className="footer-col">
  <h4>Products</h4>
  <ul>
    <li><Link to="/products/hrms">HRMS</Link></li>
    <li><Link to="/products/crm">CRM</Link></li>
    <li><Link to="/products/messaging">Messaging App</Link></li>
    <li><Link to="/products/food-delivery">Food Delivery</Link></li>
  </ul>
</div>


  {/* GOOGLE MAP */}
  <div className="footer-map">
    <iframe
  title="Manovate Location"
  src="https://www.google.com/maps?q=Agnitio%20Park%2C%207th%20Floor%2C%20Kandhanchavadi%2C%20OMR%2C%20Perungudi%2C%20Chennai%20600096&output=embed"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

  </div>

</div>


      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 Manovate Technologies. All rights reserved.</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/share/17pVPQnFfg/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://x.com/manovate_tech" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          <a href="https://www.youtube.com/channel/UC-fJapw0ZcqA0g91mDkaVoQ" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>

          <a href="https://www.instagram.com/manovate_tech/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/manovate-technologies" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
