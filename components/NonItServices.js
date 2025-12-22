import { useEffect, useRef, useState } from "react";
import "./ITServices.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SERVICES = [
  {
  id: "business-consulting",
  title: "Business Consulting Services",
  subtitle: "Strategic Business Consulting for Sustainable Growth",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses strengthen
      their foundation, streamline operations, and plan for measurable growth.
    </p>

    <p>
      Our consulting services combine data-driven insights with real-world
      expertise to align business goals with practical execution.
    </p>

    <p>
      We partner with startups, SMEs, and enterprises to uncover inefficiencies,
      improve decision-making, and design strategies that drive lasting impact.
    </p>

    <h3>Our Business Consulting Expertise</h3>

    <h4>Operational Efficiency Improvement</h4>
    <p>
      Identify process gaps and implement smart strategies to increase
      productivity, reduce costs, and optimize resource utilization.
    </p>

    <h4>Business Strategy Development</h4>
    <p>
      Create long-term business roadmaps that align with your vision, market
      trends, and evolving customer expectations.
    </p>

    <h4>Organizational Transformation</h4>
    <p>
      Support leadership teams in restructuring, change management, and culture
      building to enhance business agility.
    </p>

    <h4>Financial and Performance Analysis</h4>
    <p>
      Use data-backed insights to evaluate performance, control costs, and
      strengthen profitability.
    </p>

    <h4>Market and Competitive Intelligence</h4>
    <p>
      Stay ahead of industry shifts with research-driven insights that guide
      expansion, partnerships, and innovation.
    </p>

    <h3>Why Partner with Us</h3>
    <ul>
      <li>
        Consultants with diverse industry insights and practical problem-solving
        expertise
      </li>
      <li>
        Tailored business strategies based on measurable goals
      </li>
      <li>
        Proven frameworks for sustainable and scalable growth
      </li>
      <li>
        Continuous guidance for strategic execution and performance tracking
      </li>
    </ul>

    <h3>Drive Smarter Growth</h3>
    <p>
      Build a stronger, more efficient business with
      <strong>Manovate Technologies</strong> Business Consulting Services.
    </p>

    <p>
      Our strategic approach empowers organizations to make informed decisions
      and achieve consistent success.
    </p>
  `
}
,

  {
  id: "branding-design",
  title: "Branding & Design Services",
  subtitle: "Create a Powerful Brand Identity That Inspires and Connects",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses establish a
      brand that tells their story, builds trust, and creates lasting
      impressions.
    </p>

    <p>
      Our branding and design services go beyond visuals—we craft experiences
      that communicate your values and connect emotionally with your audience.
    </p>

    <p>
      We work with startups and established enterprises to develop cohesive
      brand identities that stand out across digital and physical platforms.
    </p>

    <h3>Our Branding & Design Expertise</h3>

    <h4>Brand Strategy Development</h4>
    <p>
      Define your brand’s vision, mission, and positioning with a clear strategy
      that differentiates you in a competitive market.
    </p>

    <h4>Logo & Visual Identity Design</h4>
    <p>
      Create unique, memorable, and meaningful brand visuals including logos,
      color palettes, and typography systems that reflect your identity.
    </p>

    <h4>Marketing Collateral Design</h4>
    <p>
      Design professional brochures, presentations, and promotional materials
      that strengthen your marketing efforts and brand consistency.
    </p>

    <h4>Digital & Social Media Branding</h4>
    <p>
      Ensure your brand looks and feels consistent across websites, social media
      platforms, and online campaigns.
    </p>

    <h4>Rebranding & Brand Refresh</h4>
    <p>
      Revitalize your existing brand with a modern design approach that aligns
      with current trends and evolving customer expectations.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Holistic approach combining creativity and brand strategy
      </li>
      <li>
        Experienced designers with cross-industry expertise
      </li>
      <li>
        Design systems optimized for both digital and print presence
      </li>
      <li>
        Consistent branding that enhances credibility and engagement
      </li>
    </ul>

    <h3>Build a Brand That Lasts</h3>
    <p>
      Your brand is your most powerful business asset.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to build a brand
      identity that inspires trust, attracts customers, and fuels long-term
      growth.
    </p>
  `
}
,

  {
  id: "accounting-finance",
  title: "Accounting & Financial Operations Services",
  subtitle: "Streamline Your Finances with Accuracy, Transparency, and Control",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses simplify
      financial management and gain actionable insights for smarter
      decision-making.
    </p>

    <p>
      Our accounting and financial operations services are designed to ensure
      accuracy, compliance, and efficiency in every transaction—giving you
      complete control over your financial processes.
    </p>

    <p>
      From bookkeeping to financial analysis, we provide tailored solutions that
      help organizations maintain clarity, optimize performance, and focus on
      sustainable growth.
    </p>

    <h3>Our Core Financial Solutions</h3>

    <h4>Bookkeeping & Accounting</h4>
    <p>
      Accurate, real-time financial tracking that keeps your records organized
      and your business audit-ready.
    </p>

    <h4>Payroll & Compliance Management</h4>
    <p>
      Timely payroll processing with complete adherence to tax laws and
      regulatory requirements.
    </p>

    <h4>Financial Planning & Analysis</h4>
    <p>
      Data-driven insights that guide budgeting, forecasting, and long-term
      business planning.
    </p>

    <h4>Accounts Payable & Receivable Automation</h4>
    <p>
      Streamlined systems that improve cash flow, reduce errors, and ensure
      financial accuracy.
    </p>

    <h4>Expense & Asset Management</h4>
    <p>
      Comprehensive tracking of assets and expenditures for better resource
      utilization and financial visibility.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Reliable financial operations built on accuracy and compliance
      </li>
      <li>
        Expert support for startups, SMEs, and enterprise-level businesses
      </li>
      <li>
        Cloud-based financial tools for secure, real-time access to data
      </li>
      <li>
        Scalable solutions that adapt as your business grows
      </li>
    </ul>

    <h3>Drive Financial Efficiency and Business Growth</h3>
    <p>
      Gain better financial control with
      <strong>Manovate Technologies</strong> Accounting & Financial Operations
      Services.
    </p>

    <p>
      We empower your business with transparency, accuracy, and insights that
      support confident decision-making and long-term success.
    </p>
  `
}
,

  {
  id: "digital-marketing",
  title: "Digital Marketing Services",
  subtitle: "Boost Your Online Presence and Turn Clicks into Customers",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses grow online
      through data-driven digital marketing strategies that attract, engage, and
      convert.
    </p>

    <p>
      Our team blends creativity with analytics to deliver measurable results
      across every digital channel.
    </p>

    <p>
      From brand visibility to lead generation, we ensure your business reaches
      the right audience at the right time—maximizing ROI and long-term growth.
    </p>

    <h3>Our Digital Marketing Expertise</h3>

    <h4>Search Engine Optimization (SEO)</h4>
    <p>
      Enhance your website’s visibility and rank higher on Google with proven
      SEO strategies that drive organic traffic and qualified leads.
    </p>

    <h4>Pay-Per-Click (PPC) Advertising</h4>
    <p>
      Target your ideal audience with high-performing ad campaigns that deliver
      measurable conversions and controlled ad spend.
    </p>

    <h4>Social Media Marketing (SMM)</h4>
    <p>
      Build brand awareness and engagement through tailored campaigns across
      platforms like Instagram, LinkedIn, Facebook, and X.
    </p>

    <h4>Content Marketing</h4>
    <p>
      Develop compelling blogs, web copy, and digital assets that position your
      brand as an authority and attract loyal audiences.
    </p>

    <h4>Email & Automation Campaigns</h4>
    <p>
      Convert prospects into customers with personalized email strategies and
      automated workflows that nurture leads effectively.
    </p>

    <h4>Analytics & Performance Tracking</h4>
    <p>
      Get real-time insights into campaign performance, ROI, and user behavior
      for continuous optimization and growth.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Full-suite digital marketing solutions under one roof
      </li>
      <li>
        Campaigns built on real data, not guesswork
      </li>
      <li>
        Proven strategies to improve visibility, engagement, and conversions
      </li>
      <li>
        Certified experts in SEO, paid media, and social marketing
      </li>
      <li>
        Scalable solutions for startups, SMEs, and enterprises
      </li>
    </ul>

    <h3>Accelerate Your Brand Growth</h3>
    <p>
      Partner with <strong>Manovate Technologies</strong> to build a strong
      digital footprint that drives consistent traffic, quality leads, and
      measurable sales growth.
    </p>

    <p>
      Let’s create a marketing strategy that moves your business forward.
    </p>
  `
}
,

  {
  id: "customer-experience-management",
  title: "Customer Experience Management Services",
  subtitle: "Deliver Exceptional Customer Journeys That Build Loyalty and Growth",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses create
      meaningful customer experiences that drive satisfaction, retention, and
      lifetime value.
    </p>

    <p>
      Our Customer Experience Management (CXM) solutions focus on understanding
      customer behavior, improving engagement, and building stronger brand
      relationships across every touchpoint.
    </p>

    <p>
      We combine technology, analytics, and human insight to help your business
      deliver consistent, personalized, and impactful customer interactions
      that turn satisfaction into long-term loyalty.
    </p>

    <h3>Our CXM Service Expertise</h3>

    <h4>Customer Journey Mapping</h4>
    <p>
      Analyze every stage of the customer journey to identify pain points,
      improve touchpoints, and enhance overall satisfaction.
    </p>

    <h4>Omnichannel Engagement</h4>
    <p>
      Ensure seamless communication across channels including web, social
      media, email, and customer support for a unified brand experience.
    </p>

    <h4>Customer Feedback & Sentiment Analysis</h4>
    <p>
      Leverage AI-driven tools to capture feedback, monitor sentiment, and make
      data-backed improvements in real time.
    </p>

    <h4>Personalized Experience Design</h4>
    <p>
      Use behavioral insights and automation to deliver tailored experiences
      that increase engagement and conversions.
    </p>

    <h4>Customer Retention Strategies</h4>
    <p>
      Implement proactive service strategies and loyalty programs that
      strengthen long-term customer relationships.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Proficient in customer analytics and experience strategy
      </li>
      <li>
        Technology-driven approach for consistent engagement
      </li>
      <li>
        Proven methods to boost retention, satisfaction, and advocacy
      </li>
      <li>
        Seamless integration with CRM, support, and marketing systems
      </li>
      <li>
        Dedicated CX professionals ensuring measurable improvements
      </li>
    </ul>

    <h3>Transform Every Interaction into an Opportunity</h3>
    <p>
      Empower your business to deliver experiences that delight customers and
      strengthen brand loyalty.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to optimize every
      customer interaction for growth and retention.
    </p>
  `
}
,

  {
  id: "content-creation-management",
  title: "Content Creation & Management Services",
  subtitle: "Power Your Brand with Strategic, Impactful Content",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we create content that not only
      captures attention but also drives measurable business results.
    </p>

    <p>
      Our Content Creation and Management services help businesses communicate
      their value clearly, strengthen brand authority, and connect meaningfully
      with their audience across every digital platform.
    </p>

    <p>
      We blend creativity with strategy to deliver consistent, high-quality
      content that supports your marketing goals and fuels long-term growth.
    </p>

    <h3>Our Content Solutions Include</h3>

    <h4>Content Strategy & Planning</h4>
    <p>
      Develop a clear content roadmap that aligns your messaging with brand
      goals, target audience needs, and market trends.
    </p>

    <h4>Website & Blog Content</h4>
    <p>
      Craft SEO-optimized, engaging copy that attracts visitors, improves search
      rankings, and converts readers into customers.
    </p>

    <h4>Social Media Content</h4>
    <p>
      Create impactful posts, visuals, and campaigns that enhance engagement and
      visibility across social platforms.
    </p>

    <h4>Copywriting & Brand Messaging</h4>
    <p>
      Deliver persuasive, brand-aligned messaging for marketing materials,
      advertisements, and digital campaigns.
    </p>

    <h4>Content Management & Optimization</h4>
    <p>
      Maintain a consistent brand voice and ensure your content stays relevant
      through regular updates, performance tracking, and optimization.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Strategic content built for visibility, engagement, and conversion
      </li>
      <li>
        Skilled writers and content strategists with multi-industry experience
      </li>
      <li>
        SEO-integrated approach for stronger search rankings
      </li>
      <li>
        Streamlined content management for consistent publishing and branding
      </li>
      <li>
        Tailored solutions that evolve with your business needs
      </li>
    </ul>

    <h3>Inspire Trust and Action Through Authentic Content</h3>
    <p>
      Strong content is the foundation of effective communication.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to create and manage
      content that drives awareness, builds trust, and accelerates business
      growth.
    </p>
  `
}
,

  {
  id: "appointment-management",
  title: "Appointment Management Services",
  subtitle: "Optimize Scheduling and Enhance Customer Convenience",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses simplify
      appointment scheduling, automate systems that improve coordination,
      reduce manual effort, and enhance customer satisfaction.
    </p>

    <p>
      Our Appointment Management Services are designed to optimize time,
      increase staff productivity, and ensure a seamless booking experience
      for both customers and teams.
    </p>

    <p>
      We deliver user-friendly, scalable solutions that make scheduling faster,
      smarter, and more efficient—helping your business focus on what matters
      most: delivering value.
    </p>

    <h3>Our Appointment Management Solutions</h3>

    <h4>Automated Scheduling Systems</h4>
    <p>
      Enable real-time booking, rescheduling, and reminders to eliminate manual
      coordination and missed appointments.
    </p>

    <h4>Staff & Resource Allocation</h4>
    <p>
      Manage team availability and resource utilization effectively through
      centralized dashboards and intelligent scheduling.
    </p>

    <h4>Customer Self-Booking Portals</h4>
    <p>
      Empower customers to book appointments anytime, anywhere, with a simple
      and secure online interface.
    </p>

    <h4>Calendar & System Integration</h4>
    <p>
      Sync with Google Calendar, Outlook, CRM, and other platforms to maintain
      organized workflows and prevent scheduling conflicts.
    </p>

    <h4>Performance & Analytics Reporting</h4>
    <p>
      Track booking trends, attendance, and staff performance through
      insightful analytics for continuous improvement.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Comprehensive appointment automation solutions
      </li>
      <li>
        Seamless integration with existing business tools
      </li>
      <li>
        Enhanced efficiency and reduced administrative workload
      </li>
      <li>
        Scalable systems suitable for businesses of any size
      </li>
      <li>
        Improved customer satisfaction through instant scheduling
      </li>
    </ul>

    <h3>Simplify Your Scheduling Experience</h3>
    <p>
      Empower your business with
      <strong>Manovate Technologies</strong> Appointment Management Solutions
      that make scheduling effortless, efficient, and reliable.
    </p>

    <p>
      Deliver convenience for customers and boost productivity for your team—
      all through one smart, integrated system.
    </p>
  `
}
,
  {
  id: "administrative-support",
  title: "Administrative Support Services",
  subtitle: "Smart, Reliable, and Scalable Back-Office Solutions",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, our Administrative Support
      Services help businesses stay organized, efficient, and focused on growth.
    </p>

    <p>
      We provide comprehensive back-office support that streamlines day-to-day
      operations, reduces manual workload, and improves overall productivity.
    </p>

    <p>
      Our expert team handles essential administrative tasks with precision and
      confidentiality, allowing your business to operate smoothly without
      distractions or downtime.
    </p>

    <h3>Our Administrative Support Solutions</h3>

    <h4>Data Management & Documentation</h4>
    <p>
      Accurate handling of records, reports, and files with systematic
      organization to ensure easy accessibility and compliance.
    </p>

    <h4>Email & Communication Management</h4>
    <p>
      Professional management of business correspondence to maintain clarity,
      consistency, and timely responses.
    </p>

    <h4>Scheduling & Coordination</h4>
    <p>
      Efficient management of meetings, calendars, and task coordination to
      help teams stay on track and productive.
    </p>

    <h4>Reporting & Analytics Support</h4>
    <p>
      Preparation of performance reports, data summaries, and insights to
      support informed decision-making.
    </p>

    <h4>Virtual Administrative Assistance</h4>
    <p>
      Remote support for administrative and operational tasks—ensuring
      flexibility, scalability, and cost-effectiveness.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Skilled professionals with cross-industry administrative expertise
      </li>
      <li>
        Time-saving and cost-efficient operational support
      </li>
      <li>
        High accuracy, confidentiality, and compliance with business standards
      </li>
      <li>
        Scalable solutions to match company growth and workflow needs
      </li>
      <li>
        Flexible engagement models for full-time or project-based support
      </li>
    </ul>

    <h3>Optimize Your Operations with Smart Support</h3>
    <p>
      Let <strong>Manovate Technologies</strong> handle your administrative
      processes while you focus on strategic business goals.
    </p>

    <p>
      We provide dependable, efficient, and technology-backed support that
      enhances productivity and operational excellence.
    </p>
  `
}
];


export default function ITServices() {
  const [active, setActive] = useState(SERVICES[0]);
  const rightRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    rightRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://127.0.0.1:8000/contact-service/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: active.title,
          ...form
        })
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch {
      setStatus("error");
    }
  };


  return (
    <>
    <Navbar />
    <br></br><br></br>
    <div className="it-wrapper">
      <aside className="it-left">
        <h2>Non-IT Services</h2>
        <br></br>
        <div className="it-left-scroll">
          {SERVICES.map(service => (
            <div
              key={service.id}
              className={`left-item ${active.id === service.id ? "active" : ""}`}
              onClick={() => setActive(service)}
            >
              {service.title}
              <span>→</span>
            </div>
          ))}
        </div>
      </aside>

      <section className="it-right">
  <div className="it-right-scroll fade" ref={rightRef}>
          <h1>{active.title}</h1>
          <h2>{active.subtitle}</h2>

          <div
            className="service-content"
            dangerouslySetInnerHTML={{ __html: active.content }}
          />

          <form className="service-contact-form" onSubmit={handleSubmit}>
  <h3>Contact Us About This Service</h3>
  <p>Share your requirement and our team will reach out.</p>

  <input
    type="text"
    value={active.title}
    disabled
    className="service-readonly"
  />

  <div className="form-row">
    <input
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={form.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-row">
    <input
      name="phone"
      placeholder="Phone Number"
      value={form.phone}
      onChange={handleChange}
    />
    <input
      name="company"
      placeholder="Company Name"
      value={form.company}
      onChange={handleChange}
    />
  </div>

  <textarea
    name="message"
    rows="4"
    placeholder="Briefly describe your requirement"
    value={form.message}
    onChange={handleChange}
    required
  />

  <button type="submit" className="submit-btn">
    {status === "sending" ? "Sending..." : "Request Consultation →"}
  </button>

  {status === "success" && (
    <p className="form-success">Thank you! We’ll contact you shortly.</p>
  )}
  {status === "error" && (
    <p className="form-error">Something went wrong. Please try again.</p>
  )}
</form>

        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}