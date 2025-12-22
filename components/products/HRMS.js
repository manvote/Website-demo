// src/components/products/HRMS.js
import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function HRMS() {
  return (
    <>
    <Navbar />
    <div className="product-page pastel-bg">

      {/* HERO */}
      <section className="product-hero">
        <h1>
           Human Resource <br />
          Management System (HRMS)
        </h1>

        <p className="subtitle">
          A unified, enterprise-grade HR platform designed to manage people,
          processes, and performance at scale — securely, intelligently, and
          globally.
        </p>
      </section>

      {/* INTRO */}
      <section className="product-section">
        <p>
          Manovate HRMS is built for modern organizations operating across
          geographies, regulations, and workforce models. From fast-growing
          startups to large enterprises, our platform centralizes HR operations
          into a single intelligent system that improves efficiency, ensures
          compliance, and enhances employee experience.
        </p>

        <p>
          Unlike traditional HR tools, Manovate HRMS is designed with flexibility,
          automation, and analytics at its core — enabling HR leaders to move
          beyond administration and focus on strategic workforce outcomes.
        </p>
      </section>

      {/* GRID */}
      <section className="product-grid">

        <div>
          <h3>Core Capabilities</h3>
          <ul>
            <li>End-to-end employee lifecycle management</li>
            <li>Payroll, tax, and statutory compliance automation</li>
            <li>Attendance, leave, and workforce scheduling</li>
            <li>Performance management and goal tracking</li>
            <li>HR analytics and real-time dashboards</li>
            <li>Role-based access and enterprise security</li>
          </ul>
        </div>

        <div>
          <h3>Built for Enterprises</h3>
          <ul>
            <li>Supports multi-location and global teams</li>
            <li>Highly configurable workflows</li>
            <li>Cloud-native, scalable architecture</li>
            <li>Integrates with ERP, finance, and identity systems</li>
            <li>Data privacy and compliance-first design</li>
          </ul>
        </div>

      </section>

      {/* TAGS */}
      <section className="product-section">
        <h2>Key Capabilities</h2>

        <div className="capabilities">
          <span>Employee Lifecycle</span>
          <span>Payroll & Compliance</span>
          <span>Performance Management</span>
          <span>HR Analytics</span>
          <span>Enterprise Security</span>
          <span>Cloud & API Ready</span>
        </div>
      </section>

      {/* STATS */}
      <section className="product-stats">
        <div className="stat-box">
          <strong>40%</strong>
          <span>Reduction in HR operational effort</span>
        </div>

        <div className="stat-box">
          <strong>99.9%</strong>
          <span>Payroll accuracy</span>
        </div>

        <div className="stat-box">
          <strong>3x</strong>
          <span>Faster HR decision-making</span>
        </div>

        <div className="stat-box">
          <strong>100%</strong>
          <span>Compliance-ready workflows</span>
        </div>
      </section>

      {/* CTA */}
      <section className="product-cta">
        
<a href="/contact" className="story-btn">
  <span>Discuss Your Requirements →</span>
</a>

        
      </section>

    </div>
    <Footer />
    </>
  );
}
