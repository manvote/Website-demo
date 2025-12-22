import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/manovate-logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ================= INLINE NAVBAR STYLE ================= */
  const navbarStyle = {
    backgroundColor: isHome
      ? scrolled
        ? "#001f3f"   // home + scrolled
        : "transparent" // home top
      : "#001f3f",     // other pages always blue
    boxShadow:
      isHome && !scrolled
        ? "none"
        : "0 4px 20px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  };

  return (
    <nav
  className={`navbar ${
    isHome ? "navbar-home" : "navbar-solid"
  } ${scrolled ? "scrolled" : ""}`}
  style={navbarStyle}
>

      <div className="container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/" className="logo-flex">
            <img src={logo} alt="Manovate Logo" className="logo-img" />
          </Link>
        </div>

        {/* MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* LINKS */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li className="dropdown">
            <span>Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/it">IT Services</Link></li>
              <li><Link to="/services/non-it">Non-IT Services</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <span>Products ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/products/hrms">HRMS</Link></li>
              <li><Link to="/products/crm">CRM</Link></li>
              <li><Link to="/products/messaging">Messaging App</Link></li>
              <li><Link to="/products/food-delivery">Food Delivery</Link></li>
            </ul>
          </li>

          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/careers">Careers</Link></li>

          <li>
            <Link className="contact-btn" to="/free-consultation">
              Free Consultation →
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;

