import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/contact/", // 👈 PUT YOUR API LINK HERE
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT CONTENT (UNCHANGED) */}
        <div className="contact-left">
          <h2>
            Let’s Build <span>Impactful Technology</span>
          </h2>

          <p className="contact-intro">
            Manovate Technologies partners with enterprises to design,
            build, and scale secure digital platforms that solve
            real business challenges.
          </p>
          <p className="contact-intro">
            From strategy and architecture to engineering and delivery,
            our teams work alongside you to create measurable outcomes
            and long-term value.
          </p>

          <div className="expertise">
            <div className="expertise-item">
              <strong>Enterprise Consulting</strong>
              <span>
                Strategy, system architecture, and large-scale
                digital transformation.
              </span>
            </div>

            <div className="expertise-item">
              <strong>Product Engineering</strong>
              <span>
                Cloud-native platforms built for scale,
                performance, and reliability.
              </span>
            </div>

            <div className="expertise-item">
              <strong>Long-Term Partnerships</strong>
              <span>
                Continuous delivery, operational support,
                and trusted collaboration.
              </span>
            </div>
          
        </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          {!submitted ? (
            <>
              <h3 className="contact-form-title">Leave us a Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Type Your Message Here . . ."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />

                {error && <p className="form-error">{error}</p>}

                <button type="submit" className="contact-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </>
          ) : (
            <div className="contact-success">
              <h3>Thank you!</h3>
              <p>
                Your message has been sent.
                Our team will get back to you shortly.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}