import React from "react";
import "./EnterpriseService.css";
import Footer from "./Footer";
export default function Cybersecurity() {
  return (
    <div className="ent-page">

      <section className="ent-hero">
        <div className="ent-hero-content">
          <span className="ent-tag">CYBERSECURITY</span>
          <h1>Enterprise Cybersecurity Built for Resilience</h1>
          <p>
            Protecting critical systems, data, and digital assets through
            security-by-design, governance, and continuous threat monitoring.
          </p>
          <a href="/request-demo" className="ent-hero-btn">Talk to Security Experts →</a>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
        <h2>Our Cybersecurity Capabilities</h2>
        <div className="ent-grid">
          <div className="ent-card">Threat Detection & Response</div>
          <div className="ent-card">Application & Network Security</div>
          <div className="ent-card">Data Protection & Encryption</div>
          <div className="ent-card">Compliance & Risk Management</div>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
  <h2>Enterprise Security Outcomes</h2>
  <p className="ent-lead">
    Our cybersecurity services focus on reducing enterprise risk, improving
    resilience, and ensuring regulatory compliance across complex digital
    environments.
  </p>

  <div className="ent-grid">
    <div className="ent-card">
      <h3>Risk Reduction</h3>
      <p>
        Proactively identify vulnerabilities and mitigate threats before they
        impact business operations.
      </p>
    </div>

    <div className="ent-card">
      <h3>Business Continuity</h3>
      <p>
        Ensure uninterrupted operations through resilient security architectures
        and incident response strategies.
      </p>
    </div>

    <div className="ent-card">
      <h3>Regulatory Compliance</h3>
      <p>
        Align security controls with global standards such as ISO, SOC, GDPR,
        and industry regulations.
      </p>
    </div>

    <div className="ent-card">
      <h3>Threat Visibility</h3>
      <p>
        Gain real-time visibility into threats across networks, applications,
        and cloud environments.
      </p>
    </div>
  </div>
</section>


<section className="ent-section ent-noise-bg">
  <h2>Our Cybersecurity Delivery Model</h2>

  <div className="ent-steps">
    <div className="ent-step"><strong>01</strong><p>Security Assessment</p></div>
    <div className="ent-step"><strong>02</strong><p>Architecture & Controls</p></div>
    <div className="ent-step"><strong>03</strong><p>Implementation</p></div>
    <div className="ent-step"><strong>04</strong><p>Monitoring & Response</p></div>
  </div>
</section>


      <section className="ent-final">
        <h2>Secure Your Enterprise Today</h2>
        <a href="/free-consultation" className="ent-final-btn">Schedule Security Assessment →</a>
      </section>
<Footer/>
    </div>
  );
}