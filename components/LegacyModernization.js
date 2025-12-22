import React from "react";
import "./LegacyModernization.css";
import Footer from "./Footer";
export default function LegacyModernization() {
  return (
    <div className="legacy-enterprise">

      {/* ================= HERO ================= */}
      <section className="legacy-hero">
        <div className="legacy-hero-content">
          <span className="legacy-tag">LEGACY MODERNIZATION</span>

          <h1>
            Modernizing Core Systems<br />
            Without Disrupting the Business
          </h1>

          <p>
            We help enterprises transform legacy systems into modern, scalable,
            and cloud-ready platforms — reducing risk, improving agility, and
            enabling continuous innovation without business downtime.
          </p>

          <a href="/request-demo" className="legacy-hero-cta">
            Schedule a Modernization Assessment →
          </a>
        </div>
      </section>

      {/* ================= WHY MODERNIZATION ================= */}
      <section className="legacy-section">
        <h2>Why Legacy Modernization Matters</h2>

        <p className="legacy-lead">
          Legacy systems often become barriers to growth, innovation, and security.
          Our modernization approach focuses on long-term business value —
          not just technology replacement.
        </p>

        <div className="legacy-stats">
          <div>
            <h3>60%</h3>
            <p>Reduction in Maintenance Costs</p>
          </div>
          <div>
            <h3>4×</h3>
            <p>Faster Time-to-Market</p>
          </div>
          <div>
            <h3>99.99%</h3>
            <p>System Availability During Migration</p>
          </div>
        </div>
      </section>

      {/* ================= MODERNIZATION PILLARS ================= */}
      <section className="legacy-section alt">
        <h2>Our Modernization Pillars</h2>

        <div className="legacy-pillars">
          <div>
            <h3>Application Modernization</h3>
            <p>
              Refactor or re-architect legacy applications into modular,
              cloud-native architectures.
            </p>
          </div>

          <div>
            <h3>Platform & Infrastructure Upgrade</h3>
            <p>
              Migrate from on-premise infrastructure to scalable, secure
              cloud environments.
            </p>
          </div>

          <div>
            <h3>Data Modernization</h3>
            <p>
              Modern data platforms enabling analytics, AI, and real-time insights.
            </p>
          </div>

          <div>
            <h3>Integration Modernization</h3>
            <p>
              Replace brittle point-to-point integrations with API-led
              and event-driven architectures.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MODERNIZATION ARCHITECTURE ================= */}
      <section className="legacy-section">
        <h2>Enterprise Modernization Architecture</h2>

        <p className="legacy-lead">
          We apply a layered modernization architecture that ensures
          scalability, resilience, and future readiness.
        </p>

        <ul className="legacy-architecture">
          <li>Legacy Application Assessment & Dependency Mapping</li>
          <li>Cloud-Native & Microservices Architecture</li>
          <li>API Management & Integration Layer</li>
          <li>Security, Compliance & Identity Management</li>
          <li>Monitoring, Observability & DevOps Enablement</li>
        </ul>
      </section>

      {/* ================= RISK & GOVERNANCE ================= */}
      <section className="legacy-section alt">
        <h2>Risk Mitigation, Security & Governance</h2>

        <div className="legacy-governance">
          <div>
            <h3>Zero-Downtime Migration</h3>
            <p>
              Incremental modernization ensuring uninterrupted business operations.
            </p>
          </div>

          <div>
            <h3>Enterprise Security</h3>
            <p>
              Secure-by-design modernization aligned with enterprise security standards.
            </p>
          </div>

          <div>
            <h3>Compliance Ready</h3>
            <p>
              Built to meet regulatory, audit, and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="legacy-section">
        <h2>Industries We Modernize</h2>

        <div className="legacy-industries">
          <span>Banking & Financial Services</span>
          <span>Insurance</span>
          <span>Healthcare</span>
          <span>Manufacturing</span>
          <span>Retail</span>
          <span>Public Sector</span>
        </div>
      </section>

      {/* ================= DELIVERY MODEL ================= */}
      <section className="legacy-section alt">
        <h2>Our Modernization Delivery Model</h2>

        <div className="legacy-delivery">
          <div>
            <strong>01</strong>
            <p>Assessment & Roadmap</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Architecture & Design</p>
          </div>
          <div>
            <strong>03</strong>
            <p>Incremental Modernization</p>
          </div>
          <div>
            <strong>04</strong>
            <p>Optimization & Scale</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="legacy-final">
        <h2>
          Ready to Modernize Without Risk?
        </h2>

        <p>
          Engage with our experts to modernize your legacy systems
          while maintaining business continuity and compliance.
        </p>

        <a href="/free-consultation" className="legacy-final-btn">
          Talk to a Modernization Expert →
        </a>
      </section>
 <Footer/>
    </div>
  );
}