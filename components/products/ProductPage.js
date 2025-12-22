import React from "react";
import "./ProductPage.css";

export default function ProductPage({ data }) {
  return (
    <section className="product-page">

      {/* HERO */}
      <div className="product-hero">
        <h1>{data.title}</h1>
        <p className="subtitle">{data.subtitle}</p>
      </div>

      {/* INTRO */}
      <div className="product-section">
        <p className="intro">{data.intro}</p>
      </div>

      {/* WHO IT'S FOR */}
      <div className="product-section">
        <h2>Who It’s For</h2>
        <p>{data.whoItsFor}</p>
      </div>

      {/* PROBLEMS & SOLUTIONS */}
      <div className="product-grid">
        <div>
          <h3>Business Challenges</h3>
          <ul>
            {data.problems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>How HRMS Solves Them</h3>
          <ul>
            {data.solutions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CAPABILITIES */}
      <div className="product-section">
        <h2>Core Capabilities</h2>
        <div className="capabilities">
          {data.capabilities.map((cap, i) => (
            <span key={i}>{cap}</span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="product-stats">
        {data.stats.map((stat, i) => (
          <div key={i} className="stat-box">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="product-cta">
        <button>{data.cta}</button>
      </div>

    </section>
  );
}
