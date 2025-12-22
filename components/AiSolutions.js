import React from "react";
import "./AiSolutions.css";
import Footer from "./Footer";
export default function AiSolutions() {
  return (
    <div className="ai-enterprise">

      {/* ================= HERO ================= */}
      <section className="ai-ent-hero">
        <div className="ai-ent-hero-content">
          <span className="ai-ent-tag">ARTIFICIAL INTELLIGENCE</span>

          <h1>
            Enterprise AI Solutions<br />
            Built for Scale, Security & Impact
          </h1>

          <p>
            We help enterprises operationalize AI across business functions —
            moving beyond pilots to production-ready, governed, and scalable
            AI systems that deliver measurable business outcomes.
          </p>

          <a href="/request-demo" className="ai-ent-cta">
            Schedule an Executive Briefing →
          </a>
        </div>
      </section>

      {/* ================= AI AT SCALE ================= */}
      <section className="ai-ent-section">
        <h2>AI That Works at Enterprise Scale</h2>

        <p className="ai-ent-lead">
          Many organizations experiment with AI. Very few succeed at scaling it.
          Our approach focuses on production-grade AI — embedded into core
          business processes with governance, security, and performance in mind.
        </p>

        <div className="ai-ent-stats">
          <div>
            <h3>40%+</h3>
            <p>Operational Efficiency Gains</p>
          </div>
          <div>
            <h3>3×</h3>
            <p>Faster Decision Cycles</p>
          </div>
          <div>
            <h3>99.9%</h3>
            <p>Model Availability in Production</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICE PILLARS ================= */}
      <section className="ai-ent-section alt">
        <h2>Our AI Service Pillars</h2>
<br></br><br></br>
        <div className="ai-ent-pillars">
          <div>
            <h3>AI Strategy & Advisory</h3>
            <p>
              Business-aligned AI roadmaps, use-case prioritization, and ROI-driven
              adoption strategies.
            </p>
          </div>

          <div>
            <h3>Data & Model Engineering</h3>
            <p>
              Secure data pipelines, feature engineering, and high-performance
              ML model development.
            </p>
          </div>

          <div>
            <h3>Intelligent Automation</h3>
            <p>
              AI-powered process automation integrated with enterprise systems.
            </p>
          </div>

          <div>
            <h3>AI Platforms & MLOps</h3>
            <p>
              Model lifecycle management, monitoring, versioning, and continuous
              optimization.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE VIEW ================= */}
      <section className="ai-ent-section">
        <h2>Enterprise AI Architecture</h2>

        <p className="ai-ent-lead">
          Our AI solutions are built on a layered architecture that ensures
          scalability, security, and long-term maintainability.
        </p>

        <ul className="ai-ent-architecture">
          <li>Data Sources & Integration Layer</li>
          <li>AI / ML Model Layer</li>
          <li>MLOps & Monitoring Layer</li>
          <li>Security, Governance & Compliance</li>
          <li>Enterprise Application Integration</li>
        </ul>
      </section>

      {/* ================= GOVERNANCE ================= */}
      <section className="ai-ent-section alt">
        <h2>Governance, Security & Responsible AI</h2>
<br></br><br></br>
        <div className="ai-ent-governance">
          <div>
            <h3>Responsible AI</h3>
            <p>
              Bias detection, explainability, and ethical AI frameworks.
            </p>
          </div>

          <div>
            <h3>Security by Design</h3>
            <p>
              Model security, data encryption, and secure API access.
            </p>
          </div>

          <div>
            <h3>Compliance Ready</h3>
            <p>
              Alignment with GDPR, ISO, SOC, and enterprise security standards.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRY USE CASES ================= */}
      <section className="ai-ent-section">
        <h2>Industry Use Cases</h2>

        <div className="ai-ent-industries">
          <span>Banking & Financial Services</span>
          <span>Healthcare & Life Sciences</span>
          <span>Retail & E-Commerce</span>
          <span>Manufacturing</span>
          <span>Logistics & Supply Chain</span>
          <span>Technology & SaaS</span>
        </div>
      </section>

      {/* ================= DELIVERY MODEL ================= */}
      <section className="ai-ent-section alt">
        <h2>Our AI Delivery Model</h2>
<br></br><br></br>
        <div className="ai-ent-delivery">
          <div>
            <strong>01</strong>
            <p>Discovery & Business Alignment</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Design & Model Development</p>
          </div>
          <div>
            <strong>03</strong>
            <p>Production Deployment</p>
          </div>
          <div>
            <strong>04</strong>
            <p>Monitoring, Optimization & Scale</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="ai-ent-final">
        <h2>
          Ready to Operationalize AI Across Your Enterprise?
        </h2>

        <p>
          Engage with our AI experts to assess readiness, identify high-impact
          use cases, and build a roadmap for enterprise-scale AI adoption.
        </p>

        <a href="/free-consultation" className="ai-ent-final-btn">
          Talk to an AI Expert →
        </a>
      </section>
<Footer />

    
    </div>
    
  );
}