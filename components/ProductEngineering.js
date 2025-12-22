import React from "react";
import "./EnterpriseService.css";
import Footer from "./Footer";
export default function ProductEngineering() {
  return (
    <div className="ent-page">

      <section className="ent-hero">
        <div className="ent-hero-content">
          <span className="ent-tag">PRODUCT ENGINEERING</span>
          <h1>Engineering Digital Products at Enterprise Scale</h1>
          <p>
            From concept to continuous evolution, we build secure, scalable,
            and high-performance digital products.
          </p>
          <a href="/request-demo" className="ent-hero-btn">Discuss Product Strategy →</a>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
        <h2>Engineering Capabilities</h2>
        <div className="ent-grid">
          <div className="ent-card">Product Architecture & Design</div>
          <div className="ent-card">Full-Stack Development</div>
          <div className="ent-card">DevOps & CI/CD</div>
          <div className="ent-card">Lifecycle Management</div>
        </div>
      </section>

      <section className="ent-section ent-noise-bg">
  <h2>Engineering Products Built to Scale</h2>
  <p className="ent-lead">
    Our product engineering services help enterprises design, build, and
    continuously evolve digital products that scale with business growth.
  </p>

  <div className="ent-grid">
    <div className="ent-card">
      <h3>Scalable Architecture</h3>
      <p>
        Design modular, cloud-ready architectures that support long-term growth.
      </p>
    </div>

    <div className="ent-card">
      <h3>Performance & Reliability</h3>
      <p>
        Engineer systems for high availability, performance, and resilience.
      </p>
    </div>

    <div className="ent-card">
      <h3>Security by Design</h3>
      <p>
        Embed security controls throughout the product development lifecycle.
      </p>
    </div>

    <div className="ent-card">
      <h3>Continuous Delivery</h3>
      <p>
        Accelerate releases through DevOps, automation, and CI/CD pipelines.
      </p>
    </div>
  </div>
</section>

<section className="ent-section ent-noise-bg">
  <h2>End-to-End Product Lifecycle</h2>

  <div className="ent-steps">
    <div className="ent-step"><strong>01</strong><p>Product Strategy</p></div>
    <div className="ent-step"><strong>02</strong><p>Design & Engineering</p></div>
    <div className="ent-step"><strong>03</strong><p>Launch & Scale</p></div>
    <div className="ent-step"><strong>04</strong><p>Continuous Improvement</p></div>
  </div>
</section>

      <section className="ent-final">
        <h2>Build Products That Scale</h2>
        <a href="/request-demo" className="ent-final-btn">Connect with Engineers →</a>
      </section>
<Footer/>
    </div>
  );
}