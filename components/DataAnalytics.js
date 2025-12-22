import React from "react";
import "./EnterpriseService.css";
import Footer from "./Footer";
export default function DataAnalytics() {
  return (
    <div className="ent-page">

      <section className="ent-hero">
        <div className="ent-hero-content">
          <span className="ent-tag">DATA & ANALYTICS</span>
          <h1>Turning Enterprise Data into Actionable Intelligence</h1>
          <p>
            We enable organizations to make faster, smarter decisions using
            modern data platforms and advanced analytics.
          </p>
          <a href="/request-demo" className="ent-hero-btn">Request Analytics Briefing →</a>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
        <h2>Analytics Capabilities</h2>
        <div className="ent-grid">
          <div className="ent-card">Data Engineering & Pipelines</div>
          <div className="ent-card">Business Intelligence</div>
          <div className="ent-card">Advanced & Predictive Analytics</div>
          <div className="ent-card">Data Governance & Quality</div>
        </div>
      </section>

<section className="ent-section ent-noise-bg">
  <h2>Driving Decisions with Trusted Data</h2>
  <p className="ent-lead">
    We help enterprises move from fragmented data to a unified, governed,
    and analytics-ready data ecosystem.
  </p>

  <div className="ent-grid">
    <div className="ent-card">
      <h3>Single Source of Truth</h3>
      <p>
        Consolidate enterprise data into trusted platforms that support
        reporting, analytics, and AI.
      </p>
    </div>

    <div className="ent-card">
      <h3>Faster Insights</h3>
      <p>
        Enable near real-time analytics to support faster business decisions.
      </p>
    </div>

    <div className="ent-card">
      <h3>Advanced Intelligence</h3>
      <p>
        Apply predictive and prescriptive analytics to anticipate trends
        and risks.
      </p>
    </div>

    <div className="ent-card">
      <h3>Data Governance</h3>
      <p>
        Ensure data quality, lineage, security, and compliance at scale.
      </p>
    </div>
  </div>
</section>
<section className="ent-section ent-noise-bg">
  <h2>Enterprise Analytics Architecture</h2>

  <ul className="ent-list">
    <li>Data Ingestion & Integration</li>
    <li>Cloud Data Warehouses & Lakes</li>
    <li>Analytics & BI Layer</li>
    <li>Advanced Analytics & AI</li>
    <li>Governance & Security</li>
  </ul>
</section>

      <section className="ent-final">
        <h2>Unlock Value from Your Data</h2>
        <a href="/free-consultation" className="ent-final-btn">Talk to Data Experts →</a>
      </section>
<Footer/>
    </div>
  );
}