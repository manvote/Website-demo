// src/components/products/CRM.js
import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
export default function CRM() {
  return (
    <>
    <Navbar />
    <div className="product-page pastel-bg">

      {/* HERO */}
      <section className="product-hero">
        <h1>
          Customer Relationship <br />
          Management Platform (CRM)
        </h1>

        <p className="subtitle">
          A unified, enterprise-grade CRM platform designed to manage customer
          relationships, sales pipelines, and service operations — intelligently,
          securely, and at scale.
        </p>
      </section>

      {/* INTRO */}
      <section className="product-section">
        <p>
          Manovate CRM is built for modern, customer-centric organizations that
          operate across multiple channels, regions, and business models. It
          centralizes customer data, interactions, and insights into a single
          intelligent platform that empowers sales, marketing, and service teams
          to perform at their best.
        </p>

        <p>
          Unlike traditional CRM systems, Manovate CRM is designed with automation,
          AI-driven insights, and enterprise scalability at its core — enabling
          organizations to move from reactive customer management to proactive,
          relationship-led growth.
        </p>
      </section>

      {/* GRID */}
      <section className="product-grid">

        <div>
          <h3>Core Capabilities</h3>
          <ul>
            <li>Centralized customer and account management</li>
            <li>Sales pipeline and opportunity tracking</li>
            <li>Lead management and conversion automation</li>
            <li>Customer support and ticketing workflows</li>
            <li>Real-time dashboards and revenue analytics</li>
            <li>Role-based access and data security</li>
          </ul>
        </div>

        <div>
          <h3>Built for Enterprises</h3>
          <ul>
            <li>Supports multi-region and multi-currency operations</li>
            <li>Highly customizable sales and service workflows</li>
            <li>Cloud-native, scalable architecture</li>
            <li>Integrates with ERP, marketing, and finance systems</li>
            <li>Compliance-ready data governance</li>
          </ul>
        </div>

      </section>

      {/* TAGS */}
      <section className="product-section">
        <h2>Key Capabilities</h2>

        <div className="capabilities">
          <span>Customer 360</span>
          <span>Sales Automation</span>
          <span>Lead & Opportunity Management</span>
          <span>Service & Support</span>
          <span>Revenue Analytics</span>
          <span>Enterprise Security</span>
        </div>
      </section>

      {/* STATS */}
      <section className="product-stats">
        <div className="stat-box">
          <strong>35%</strong>
          <span>Increase in sales productivity</span>
        </div>

        <div className="stat-box">
          <strong>50%</strong>
          <span>Faster lead conversion cycles</span>
        </div>

        <div className="stat-box">
          <strong>2x</strong>
          <span>Improvement in customer engagement</span>
        </div>

        <div className="stat-box">
          <strong>99.9%</strong>
          <span>Data availability & reliability</span>
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
