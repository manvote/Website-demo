// components/ProductsSection.jsx
import React, { useEffect, useState, useRef } from "react";
import "./products.css";
import hrms from "../assets/hrms.webp";
import crm from "../assets/crm.jpeg";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";

const products = [
  {
    title: "Enterprise HRMS Platform",
    desc:
      "A cloud-based Human Resource Management System designed to manage the complete employee lifecycle. From onboarding and payroll to performance management and compliance, our HRMS helps enterprises streamline HR operations, improve workforce productivity, and make data-driven people decisions.",
    industry: "Enterprise Software",
    country: "Global",
    image: hrms,
    link:"/products/hrms",
  },
  {
    title: "Customer Relationship Management (CRM)",
    desc:
      "An intelligent CRM platform that centralizes customer data, sales pipelines, and communication history. Built to help sales and service teams improve lead conversion, strengthen customer relationships, and gain real-time insights into business growth.",
    industry: "Business Management",
    country: "Global",
    image: crm,
    link:"/products/crm",
  },
  {
    title: "Enterprise Messaging & Collaboration App",
    desc:
      "A secure, real-time messaging platform designed for internal team communication and collaboration. Supports one-to-one chat, group conversations, file sharing, and role-based access to ensure seamless and compliant enterprise communication.",
    industry: "Communication Technology",
    country: "Global",
    image: product1,
    link:"/products/Messaging"
  },
  {
    title: "Food Delivery & Order Management Platform",
    desc:
      "An end-to-end food delivery solution built for restaurants, cloud kitchens, and delivery startups. The platform enables online ordering, real-time order tracking, delivery partner management, payments, and analytics to support scalable hyperlocal operations.",
    industry: "Food Technology",
    country: "Global",
    image: product2,
    link:"/products/food-delivery"
  },
];


export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const isScrolling = useRef(false);

  // Scroll control (1 scroll = 1 product)
  useEffect(() => {
    const onWheel = (e) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0 && active < products.length - 1) {
        setActive((p) => p + 1);
      } else if (e.deltaY < 0 && active > 0) {
        setActive((p) => p - 1);
      }

      setTimeout(() => (isScrolling.current = false), 700);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active]);

  return (
    <section className="products-section">
      <div className="products-container">
        
        {/* LEFT CONTENT */}
        <div className="products-left">
          <h1>{products[active].title}</h1>
          <p className="desc">
  {window.innerWidth < 768
    ? products[active].desc.slice(0, 180) + "..."
    : products[active].desc}
</p>


          <div className="meta">
            <span>
              <strong>Industry:</strong> {products[active].industry}
            </span>
            <span>
              <strong>Country:</strong> {products[active].country}
            </span>
          </div>

          <a href={products[active].link} className="product-cta">
  Read More →
</a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="products-right">
          <img
            key={products[active].image}
            src={products[active].image}
            alt={products[active].title}
          />
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="product-dots">
        {products.map((_, i) => (
          <button
            key={i}
            className={i === active ? "dot active" : "dot"}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
