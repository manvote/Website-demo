import React, { useEffect, useState } from "react";
import "./SplashScreen.css";
import logo from "../assets/manovate-logo.png";

export default function SplashScreen({ children }) {
  const [startReveal, setStartReveal] = useState(false);
  const [finishSplash, setFinishSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartReveal(true);

      setTimeout(() => {
        setFinishSplash(true);
      }, 900); // ripple duration
    }, 2000); // logo display time

    return () => clearTimeout(timer);
  }, []);

  if (finishSplash) return children;

  return (
    <div className="splash-container">
      {/* LOGO */}
      <img src={logo} alt="Manovate Logo" className="splash-logo" />

      {/* RIPPLE EFFECT */}
      {startReveal && <div className="solid-ripple"></div>}

      {/* REVEAL CONTENT */}
      <div className={`reveal-content ${startReveal ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}
