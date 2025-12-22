import React from "react";
import "./RequestDemo.css";

export default function RequestDemo() {
  return (
    <div className="calendly-page">
      <iframe
        src="https://calendly.com/manovatetechnologies/businessmeet?month=2025-12"
        title="Book a Demo - Manovate Technologies"
        frameBorder="0"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}