import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./HeroSlider.css";
import "./impact.css";
import "./solutions.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// Hero images
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import aiImg from "../assets/ai.jpg";
import cloudImg from "../assets/cloud.webp";
import cyberImg from "../assets/cyber.jpg";
import appImg from "../assets/app.avif";
import productImg from "../assets/product.jpg";
import brandingImg from "../assets/branding.png";
import businessImg from "../assets/business.jpg";
import digitalImg from "../assets/digital.avif"
import aisolutions from "../assets/ai-solutions.jpg";
import modernization from "../assets/modernization.jpg";
import cloudMigration from "../assets/cloud-com.avif";
import cybersecurity from "../assets/cyber-security.jpg";  
import dataAnalytics from "../assets/data-analytics.avif";
import productEngineering from "../assets/product-engineering.avif";
import ProductsSection from "./ProductsSection";
import section from "../assets/section.jpeg";
import webImg from "../assets/web.jpg"
// later in JSX




const images = [hero1, hero2, hero3];

const Home = () => {
  /* ---------------------- HERO SLIDER LOGIC ---------------------- */
  const [index, setIndex] = useState(0);


const solutions = [
  {
    title: "AI Solutions",
    slug: "ai-solutions",
    img: aisolutions,
    desc: "AI-driven capabilities engineered to give your business a competitive edge."
  },
  {
    title: "Legacy Modernization",
    slug: "legacy-modernization",
    img: modernization,
    desc: "Transforming outdated systems into modern, scalable digital platforms."
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    img: cybersecurity,
    desc: "End-to-end security frameworks protecting your digital ecosystem."
  },
  {
    title: "Data & Analytics",
    slug: "data-analytics",
    img: dataAnalytics,
    desc: "Advanced insights powering strategic decision-making and automation."
  },
  {
    title: "Product Engineering",
    slug: "product-engineering",
    img: productEngineering,
    desc: "Enterprise-grade product development with innovation at its core."
  },
  {
    title: "Cloud Transformation",
    slug: "cloud-transformation",
    img: cloudMigration,
    desc: "Cloud-native solutions enabling agility, resilience and optimized performance."
  },
];


const [activeIndex, setActiveIndex] = useState(null);

// Move carousel so active card is centered
const centerActiveCard = (index) => {
  const cardWidth = 260;          // normal card width
  const expandedWidth = 480;   // active card width
  const gap = 40;                 // spacing between cards

  const baseX = index * (cardWidth + gap);

  const carousel = document.querySelector(".carousel-window");
  const windowCenter = carousel.offsetWidth / 2;

  const cardCenter = baseX + expandedWidth / 2;

  setTranslateX(windowCenter - cardCenter);
};


const [translateX, setTranslateX] = useState(0);

const nextCard = () => {
  setActiveIndex((prev) => {
    const newIndex = (prev + 1) % solutions.length;
    centerActiveCard(newIndex);
    return newIndex;
  });
};

const prevCard = () => {
  setActiveIndex((prev) => {
    const newIndex = prev === 0 ? solutions.length - 1 : prev - 1;
    centerActiveCard(newIndex);
    return newIndex;
  });
};

// Re-center on first load
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  if (activeIndex !== null) {
    setTimeout(() => centerActiveCard(activeIndex), 100);
  }
}, [activeIndex]);





  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  setTimeout(() => {
    const cards = document.querySelectorAll(".impact-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("in-view");
      }, i * 120);
    });
  }, 300);
}, []);

const [activeService, setActiveService] = useState(null);


// CLICK TO TOGGLE OVERLAY
useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Close all others
      cards.forEach(c => c.classList.remove("active"));

      // Open clicked one
      card.classList.add("active");
    });
  });
}, []);


useEffect(() => {
  const elements = document.querySelectorAll(
    ".impact-left-v2, .impact-card-v2"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.25 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);


useEffect(() => {
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const isCurrency = counter.innerText.includes("₹");
    let count = 0;
    const speed = target / 120;

    const update = () => {
      if (count < target) {
        count += speed;
        counter.innerText = isCurrency
          ? `₹${Math.floor(count)}`
          : Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = isCurrency
          ? `₹${target}+`
          : target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const revenueCard = document.querySelector(".impact-revenue");

  if (!revenueCard) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revenueCard.classList.add("animate");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(revenueCard);

  return () => observer.disconnect();
}, []);

  

  return (
    <>
      <Navbar />

      

{/* ---------------------- HERO SLIDER ---------------------- */}
      <div className="hero-slider">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-content">
          <h1>Engineering Digital Success</h1>
          <p>Transforming businesses through technology and innovation</p><br></br>
         <Link to="/request-demo" className="hero-demo-btn">
  Book a Demo <span>→</span>
</Link>
        </div>
      </div>


      {/* ------------------ ULTRA PREMIUM IMPACT SECTION 2.0 ------------------ */}
<section className="impact-mnc">

  {/* LEFT */}
  <div className="impact-left">
    <span className="impact-tag">• Our Global Impact</span>

    <h2 className="impact-title">
      Building Intelligent, Scalable & Secure
      <span> Digital Ecosystems</span>
    </h2>

    <p className="impact-desc">
      Manovate Technologies is a technology and consulting partner delivering
      intelligent, AI-powered software, enterprise platforms, and scalable
      digital solutions. We help organizations modernize systems, automate
      operations, and execute growth with confidence at scale.
    </p>

<div className="impact-points">
  <div className="impact-point">
    <span>✓</span>
    <p>Enterprise-grade architecture designed for scalability, security, and long-term performance.</p>
  </div>

  <div className="impact-point">
    <span>✓</span>
    <p>AI-driven automation and analytics that reduce operational complexity and accelerate outcomes.</p>
  </div>

  <div className="impact-point">
    <span>✓</span>
    <p>Proven delivery frameworks enabling consistent execution across global, multi-technology programs.</p>
  </div>
</div>


    <button
  className="impact-btn"
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span>Explore Our Capabilities →</span>
</button>

  </div>

  {/* RIGHT */}
  <div className="impact-right">

    <div className="impact-metric">
      <div className="metric-icon clients"></div>
      <h3 className="counter" data-target="620">0</h3>
      <p>Clients Worldwide</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon founded"></div>
      <h3>2016</h3>
      <p>Founded & Scaling Since</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon projects"></div>
      <h3 className="counter" data-target="1156">0</h3>
      <p>Projects Successfully Delivered</p>
    </div>

    <div className="impact-metric">
      <div className="metric-icon global"></div>
      <h3 className="counter" data-target="45">0+</h3>
      <p>Global Strategic Collaborations</p>
    </div>

    <div className="impact-revenue">
      <h3 className="counter" data-target="30">₹0+</h3>
      <p>₹30+ Crores Monthly Project Execution Capability</p>
      <div className="revenue-graph"></div>
    </div>

  </div>
</section>



{/* ---------------------- SOLUTIONS SECTION ---------------------- */}

<section className="solutions-flex">
  <div className="solutions-accent"></div>

  <p className="solution-tag">• Solutions</p>

  <h1 className="solution-title">
    Powering Businesses Through Smart<br /> Engineering
  </h1>

  {/* WRAPPER FOR ARROWS + CAROUSEL */}
  <div className="carousel-wrapper">

    {/* LEFT ARROW */}
    <button
      className="carousel-arrow left"
      onClick={prevCard}
      aria-label="Previous"
    >
      ‹
    </button>

    {/* CAROUSEL WINDOW */}
    <div className="carousel-window">
      <div
        className="carousel-track"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {solutions.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              className={`flex-card ${isActive ? "active" : "inactive"}`}
              onClick={() => {
                if (activeIndex === i) {
                  setActiveIndex(null);
                } else {
                  setActiveIndex(i);
                  centerActiveCard(i);
                }
              }}
            >
              {/* NORMAL CARD */}
              {!isActive && (
                <div className="normal-card">
                  <div className="normal-img-wrapper">
                    <img
                      className="normal-img"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  <div className="normal-title-wrapper">
                    <h2 className="normal-title">{item.title}</h2>
                  </div>
                </div>
              )}

              {/* EXPANDED CARD */}
              {isActive && (
                <div className="expanded-content">
                  <img
                    className="big-img"
                    src={item.img}
                    alt={item.title}
                  />

                  <div className="text-side">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>

                    <Link
  to={`/solutions/${item.slug}`}
  className="solution-arrow-btn"
>
  Explore →
</Link>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* RIGHT ARROW */}
    <button
      className="carousel-arrow right"
      onClick={nextCard}
      aria-label="Next"
    >
      ›
    </button>

  </div>
</section>



{/* ---------------------- SERVICES SECTION ---------------------- */}
<section className="services-pro" id="services">

  <p className="services-tag">• Services</p>

  <h1 className="services-title">
    Transforming Businesses<br/>Through Engineering Excellence
  </h1>

<div className="services-grid">

  {[
    {
      title: "Website & Web Application Services",
      img: webImg,
      desc: `High performance websites and enterprise grade web platforms engineered for speed, 
security, and seamless user experiences built to elevate your digital presence and business 
capabilities.`
      
    },
    {
      title: "Mobile Application Development",
      img: appImg,
      desc: `Modern, intuitive, and scalable mobile applications across Android, iOS, and cross-platform 
frameworks designed to deliver exceptional user engagement and long-term reliability.`
    },
    {
      title: "AI & Automation Solutions",
      img: aiImg,
      desc: `Intelligent automation and cutting-edge AI solutions that streamline operations, reduce 
manual effort, and empower smarter, data-driven decision-making across your organization. `
    },
    {
      title: "Custom Enterprise Software",
      img: productImg,
      desc: `Fully tailored enterprise systems that enhance productivity, optimize workflows, and scale 
effortlessly whether CRM, ERP, HRMS, or any custom business-critical platform.`
    },
    {
      title: "Cloud & Infrastructure Services",
      img: cloudImg,
      desc: `Secure, resilient, and cost-efficient cloud environments built to support modern business 
demands covering migration, integration, and infrastructure optimization at scale.`
    },
    {
      title: "Cybersecurity Solutions",
      img: cyberImg,
      desc: `End-to-end cybersecurity frameworks delivering continuous protection through robust audits, 
threat monitoring, compliance readiness, and advanced data security.`
    },{
      title: "Business & Strategy Consulting",
      img: businessImg,
      desc: `Strategic guidance and operational optimization that help businesses improve performance, 
accelerate growth, and successfully navigate digital transformation.`
    },
    {
      title: "Branding & Creative Services",
      img: brandingImg,
      desc: `Impactful brand identities and visually compelling digital assets that strengthen market 
presence and create meaningful connections with your audience. `
    },
    {
      title: "Digital Marketing Services",
      img: digitalImg,
      desc: `Data-driven SEO and performance marketing strategies that maximize visibility, attract high
intent customers, and deliver measurable growth across digital channels. `
    }

  ].map((service, idx) => (
    
   <div
  className={`service-card ${activeService === idx ? "active" : ""}`}
  key={idx}
  onClick={() => {
    setActiveService(idx);
    setTimeout(() => setActiveService(null), 4000); // auto-close
  }}
>
  <img src={service.img} className="service-img" alt={service.title} />

  {/* Title always visible */}
  <div className="service-title-bar">
    <h3>{service.title}</h3>
  </div>

  {/* SLIDE-UP FROM BOTTOM OVERLAY */}
  <div className="service-slide-overlay">
    <h3>{service.title}</h3>
    <p>{service.desc}</p>
  </div>
</div>


  ))}

</div>


</section>


<ProductsSection />

<section className="impact-story impact-story--compact">

  {/* LEFT CONTENT */}
  <div className="impact-story-left">
    <span className="story-tag">• Execution at Scale</span>

    <h2 className="story-title">
      Proven Enterprise Delivery
      <span>Built for Scale & Reliability</span>
    </h2>

    <p className="story-desc">
  Since 2016, Manovate Technologies has worked with over 600 organizations across
  global markets, delivering more than a thousand successful projects through
  strong cross-border collaborations. Our experience spans diverse industries,
  supported by a delivery model built for scale, security, and consistency.
</p>

<p className="story-desc">
  With the capability to execute large programs and sustain monthly project
  execution exceeding ₹30 Crores, we help businesses manage complexity,
  maintain reliability, and achieve measurable outcomes at enterprise scale.
</p>

    <a href="/contact" className="story-btn">
  <span>Discuss Your Requirements →</span>
</a>

  </div>

  {/* RIGHT IMAGE */}
  <div className="impact-story-right">
    <img
      src= {section}
      alt="Enterprise Digital Execution"
    />
  </div>

</section>





<Footer />

    </>
  );
};

export default Home;
