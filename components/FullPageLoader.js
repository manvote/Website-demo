import React from "react";
import "./FullPageLoader.css";

export default function FullPageLoader({ text = "Loading…" }) {
  return (
    <div className="loader-page">
      <div className="loader-card">
        <div className="loader-logo">
          <span>M</span>
        </div>

        <div className="loader-bar">
          <span></span>
        </div>

        <p className="loader-text">{text}</p>
      </div>
    </div>
  );
}