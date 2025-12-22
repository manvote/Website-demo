import React from "react";
import "./EnterpriseService.css";
import Footer from "./Footer";
export default function CloudTransformation() {
  return (
    <div className="ent-page">

      <section className="ent-hero">
        <div className="ent-hero-content">
          <span className="ent-tag">CLOUD TRANSFORMATION</span>
          <h1>Cloud-Native Transformation for the Enterprise</h1>
          <p>
            We help organizations migrate, modernize, and optimize workloads
            across secure and scalable cloud platforms.
          </p>
          <a href="/request-demo" className="ent-hero-btn">Start Cloud Assessment →</a>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
        <h2>Cloud Services</h2>
        <div className="ent-grid">
          <div className="ent-card">Cloud Migration</div>
          <div className="ent-card">Cloud-Native Development</div>
          <div className="ent-card">Infrastructure Optimization</div>
          <div className="ent-card">Multi-Cloud & Hybrid</div>
        </div>
      </section>
      <section className="ent-section ent-noise-bg">
  <h2>Enabling Secure and Scalable Cloud Adoption</h2>
  <p className="ent-lead">
    Our cloud transformation services help enterprises modernize infrastructure,
    improve agility, and optimize costs while maintaining security and control.
  </p>

  <div className="ent-grid">
    <div className="ent-card">
      <h3>Agility & Speed</h3>
      <p>
        Enable faster innovation through cloud-native platforms and services.
      </p>
    </div>

    <div className="ent-card">
      <h3>Cost Optimization</h3>
      <p>
        Optimize cloud spending through right-sizing and governance.
      </p>
    </div>

    <div className="ent-card">
      <h3>Resilience</h3>
      <p>
        Build highly available systems with disaster recovery and failover.
      </p>
    </div>

    <div className="ent-card">
      <h3>Security & Compliance</h3>
      <p>
        Implement enterprise-grade security and compliance frameworks in the cloud.
      </p>
    </div>
  </div>
</section>

<section className="ent-section ent-noise-bg">
  <h2>Our Cloud Transformation Approach</h2>

  <div className="ent-steps">
    <div className="ent-step"><strong>01</strong><p>Cloud Readiness</p></div>
    <div className="ent-step"><strong>02</strong><p>Migration & Modernization</p></div>
    <div className="ent-step"><strong>03</strong><p>Optimization</p></div>
    <div className="ent-step"><strong>04</strong><p>Operate & Govern</p></div>
  </div>
</section>

      <section className="ent-final">
        <h2>Accelerate Cloud Adoption</h2>
        <a href="/free-consultation" className="ent-final-btn">Talk to Cloud Experts →</a>
      </section>
<Footer/>
    </div>
  );
}