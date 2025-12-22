import React from "react";
import "./About.css";
import ceo from "../assets/team/ceo.png";
import manager1 from "../assets/team/manager.jpg";
import manager2 from "../assets/team/manager1.jpeg";
import Footer from "./Footer";
import Navbar from "./Navbar";
const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-wrapper">

      {/* HERO */}
   <section className="about-hero">
  <div className="about-hero-inner">
    <h1>Engineering Digital Excellence</h1>

    <p>
      Manovate Technologies is a technology consulting and engineering
      organization helping businesses design, build, and scale
      secure, high-performance, and future-ready digital systems.
    </p>

    <p>
      We partner with startups, growing enterprises, and established
      organizations to transform complex business challenges into
      intelligent technology solutions. Our approach combines
      deep engineering expertise, modern architectures, and
      business-driven strategy to deliver systems that are reliable,
      adaptable, and built for long-term growth.
    </p>

    <p>
      From enterprise platforms and cloud-native applications to
      AI-powered automation and data-driven systems, we focus on
      building technology that performs under scale, protects
      critical data, and evolves with changing business needs.
    </p>

    <p>
      At Manovate, engineering excellence is not just about writing
      code — it is about creating digital foundations that enable
      organizations to move faster, operate smarter, and compete
      confidently in a rapidly evolving digital landscape.
    </p>
  </div>
</section>


      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Manovate Technologies partners with enterprises, startups, and
          growing organizations to design, engineer, and modernize
          mission-critical digital platforms.
        </p>
        <p>
          Our expertise spans custom software engineering, cloud platforms,
          enterprise systems, AI-driven automation, and secure digital
          transformation initiatives. We focus on building systems that
          scale reliably, perform consistently, and evolve with business needs.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          We deliver enterprise-grade technology solutions across web
          platforms, mobile systems, cloud infrastructure, data engineering,
          artificial intelligence, and cybersecurity-ready architectures.
        </p>
        <p>
          From modernizing legacy environments to building cloud-native
          platforms, Manovate ensures every solution is engineered with
          performance, security, and long-term sustainability at its core.
        </p>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-card">
          <h3>1156</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat-card">
          <h3>45</h3>
          <p>Global Strategic Collaboration</p>
        </div>
        <div className="stat-card">
          <h3>5+</h3>
          <p>Years of Expertise</p>
        </div>
        <div className="stat-card">
          <h3>620</h3>
          <p>Clients Worldwide</p>
        </div>
      </section>

      {/* LEADERSHIP */}
     {/* LEADERSHIP */}
<section className="about-team">
  <h2>Leadership Team</h2>

  <div className="team-grid">

    {/* CEO & FOUNDER */}
    <div className="team-card">
      <div className="team-photo">
        <img src={ceo} alt="CEO & Founder - Manovate Technologies" />
      </div>

      <h4>CEO & Founder</h4>
      <span>Strategy, Vision & Growth</span>

      <p>
        <p>
<p>
  Drives company vision, enterprise strategy, and digital transformation
  initiatives across global clients.
</p>

</p>

      </p>
    </div>

    {/* HEAD OF ENGINEERING */}
    <div className="team-card">
      <div className="team-photo">
        <img
          src={manager1}
          alt="Head of Engineering - Manovate Technologies"
        />
      </div>

      <h4>Manager – Business Operations & Client Strategy</h4>
      <span>Execution, Partnerships & Client Success</span>

     <p>
  Oversees operations, client strategy, and execution
  quality across engagements.
</p>

    </div>

    {/* BUSINESS OPERATIONS */}
    <div className="team-card">
      <div className="team-photo">
        <img
          src={manager2}
          alt="Business Operations & Client Strategy - Manovate Technologies"
        />
      </div>

      <h4>Manager – Business Operations & Client Strategy</h4>
      <span>Execution, Partnerships & Client Success</span>

      <p>
  Oversees operations, client strategy, and execution
  quality across engagements.
</p>

    </div>

  </div>
</section>

    </div>
    <Footer />
    </>
  );
};

export default About;