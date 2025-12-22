import React from "react";
import "./ProductPage.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function FoodDelivery() {
  return (
    <>
    <Navbar />
    <div className="product-page pastel-bg">

      {/* HERO */}
      <section className="product-hero">
        <h1>
          Food Delivery & <br />
          Order Management Platform
        </h1>

        <p className="subtitle">
          A complete digital platform enabling restaurants and food brands to
          manage online orders, delivery operations, and customer engagement
          at scale.
        </p>
      </section>

      {/* INTRO */}
      <section className="product-section">
        <p>
          Manovate Food Delivery Platform is designed for restaurants, cloud
          kitchens, and food-tech startups looking to scale efficiently in
          competitive markets. The system connects customers, kitchens, and
          delivery partners through a single, unified digital experience.
        </p>

        <p>
          Built with performance and scalability in mind, the platform supports
          high-volume orders, real-time tracking, and operational analytics —
          enabling food businesses to grow without operational bottlenecks.
        </p>
      </section>

      {/* GRID */}
      <section className="product-grid">

        <div>
          <h3>Core Capabilities</h3>
          <ul>
            <li>Online ordering and menu management</li>
            <li>Real-time order tracking</li>
            <li>Delivery partner management</li>
            <li>Payment gateway integration</li>
            <li>Customer notifications and alerts</li>
            <li>Sales and operational analytics</li>
          </ul>
        </div>

        <div>
          <h3>Built for Scale</h3>
          <ul>
            <li>Supports multi-restaurant operations</li>
            <li>Cloud-native infrastructure</li>
            <li>High-performance order processing</li>
            <li>Integrates with POS and inventory systems</li>
            <li>Customizable workflows per brand</li>
          </ul>
        </div>

      </section>

      {/* TAGS */}
      <section className="product-section">
        <h2>Key Capabilities</h2>

        <div className="capabilities">
          <span>Online Ordering</span>
          <span>Delivery Management</span>
          <span>Payments</span>
          <span>Customer Engagement</span>
          <span>Analytics</span>
          <span>Cloud Scale</span>
        </div>
      </section>

      {/* STATS */}
      <section className="product-stats">
        <div className="stat-box">
          <strong>50%</strong>
          <span>Faster order fulfillment</span>
        </div>

        <div className="stat-box">
          <strong>3x</strong>
          <span>Increase in order volume</span>
        </div>

        <div className="stat-box">
          <strong>99.9%</strong>
          <span>Platform reliability</span>
        </div>

        <div className="stat-box">
          <strong>100%</strong>
          <span>Digital-first operations</span>
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
