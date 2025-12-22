import React from "react";
import "./ProductPage.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Messaging() {
  return (
    <>
    <Navbar />
    <div className="product-page pastel-bg">

      {/* HERO */}
      <section className="product-hero">
        <h1>
          Messaging & <br />
          Collaboration Platform
        </h1>

        <p className="subtitle">
          A secure, real-time communication platform designed for modern
          enterprises to collaborate faster, safer, and smarter.
        </p>
      </section>

      {/* INTRO */}
      <section className="product-section">
        <p>
          Manovate Messaging Platform enables organizations to streamline internal
          communication across teams, departments, and locations. Built with
          enterprise-grade security and scalability, it replaces fragmented chat
          tools with a single, controlled communication ecosystem.
        </p>

        <p>
          Designed for high-growth organizations and regulated industries, the
          platform ensures data privacy, operational transparency, and seamless
          collaboration — whether teams are remote, hybrid, or on-site.
        </p>
      </section>

      {/* GRID */}
      <section className="product-grid">

        <div>
          <h3>Core Capabilities</h3>
          <ul>
            <li>One-to-one and group messaging</li>
            <li>Secure file sharing and media exchange</li>
            <li>Role-based channels and access control</li>
            <li>Read receipts and message history</li>
            <li>Enterprise-grade encryption</li>
            <li>Admin controls and audit logs</li>
          </ul>
        </div>

        <div>
          <h3>Enterprise Ready</h3>
          <ul>
            <li>Scales across large teams and departments</li>
            <li>On-premise or cloud deployment options</li>
            <li>Integrates with HRMS, CRM, and ERP</li>
            <li>Compliance-ready communication workflows</li>
            <li>High availability and performance</li>
          </ul>
        </div>

      </section>

      {/* TAGS */}
      <section className="product-section">
        <h2>Key Capabilities</h2>

        <div className="capabilities">
          <span>Secure Messaging</span>
          <span>Team Collaboration</span>
          <span>File Sharing</span>
          <span>Admin Controls</span>
          <span>Enterprise Security</span>
          <span>Scalable Architecture</span>
        </div>
      </section>

      {/* STATS */}
      <section className="product-stats">
        <div className="stat-box">
          <strong>60%</strong>
          <span>Faster internal communication</span>
        </div>

        <div className="stat-box">
          <strong>99.99%</strong>
          <span>Platform uptime</span>
        </div>

        <div className="stat-box">
          <strong>2x</strong>
          <span>Improved team productivity</span>
        </div>

        <div className="stat-box">
          <strong>100%</strong>
          <span>Data ownership & compliance</span>
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
