import React, { useState } from "react";
import "./FreeConsultation.css";

export default function FreeConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const finalService =
      service === "Other" ? otherService : service;

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/contact-service/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service: finalService || "Free Consultation",
            ...form,
          }),
        }
      );

      if (!res.ok) throw new Error();

      setStatus("success");
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setService("");
      setOtherService("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="consult-page">
      <div className="consult-card animate-card">
        <div className="consult-accent-line"></div>

        {!submitted ? (
          <>
            <span className="consult-tag animate-tag">
              FREE CONSULTATION
            </span>

            <h1 className="consult-title animate-title">
              Let’s Talk About Your Project
            </h1>

            <p className="consult-sub animate-sub">
              Share your requirements with us. Our experts will contact you
              within <strong>24 hours</strong>.
            </p>

            <form className="consult-form" onSubmit={handleSubmit}>
              <input
                className="f1"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className="f2"
                type="email"
                name="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                className="f3"
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <input
                className="f4"
                name="company"
                placeholder="Company Name (Optional)"
                value={form.company}
                onChange={handleChange}
              />

              <select
                className="f5"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (e.target.value !== "Other") {
                    setOtherService("");
                  }
                }}
                required
              >
                <option value="">Service Interested In *</option>
                <option>Website & E-Commerce Development</option>
                <option>AI, Machine Learning & Automation</option>
                <option>Mobile App Development</option>
                <option>Cloud Solutions & SaaS Development</option>
                <option>Custom Software Development</option>
                <option>Other</option>
              </select>

              {service === "Other" && (
                <input
                  className="f5"
                  placeholder="Please specify the service *"
                  value={otherService}
                  onChange={(e) => setOtherService(e.target.value)}
                  required
                />
              )}

              <textarea
                className="f6"
                rows="4"
                name="message"
                placeholder="Briefly describe your requirement"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="consult-btn animate-btn">
                {status === "sending"
                  ? "Sending..."
                  : "Request Free Consultation →"}
              </button>

              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </>
        ) : (
          <div className="consult-success success-animate">
            <h2>Thank you!</h2>
            <p>
              Our team will contact you within{" "}
              <strong>24 hours</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}