import { useEffect, useRef, useState } from "react";
import "./ITServices.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SERVICES = [
  {
    id: "web",
    title: "Website Design & Development Services",
    subtitle: "Custom Website Design and Development Solutions for Every Business",
    content: `
  <h3>Overview</h3>
  <p>
    At <strong>Manovate Technologies</strong>, we design and develop modern,
    responsive, and high-performing websites that bring your brand to life online.
  </p>

  <p>
    Every website we create blends creativity, functionality, and performance,
    ensuring visitors not only stay engaged but also take action.
  </p>

  <p>
    Whether you're a startup building your first digital presence or an enterprise
    upgrading for scale, we deliver websites that drive measurable results.
  </p>

  <h3>What We Deliver</h3>

  <h4>Custom Website Design</h4>
  <p>
    Stand out with a design that reflects your brand identity, engages your audience,
    and communicates your message clearly. Every element—layout, color, typography—
    is tailored to your business goals.
  </p>

  <h4>Responsive Development</h4>
  <p>
    We build mobile-first, cross-platform websites that deliver seamless experiences
    across desktops, tablets, and smartphones.
  </p>

  <h4>High-Performance Architecture</h4>
  <p>
    Our sites are optimized for speed, SEO, and usability—ensuring fast load times,
    improved search rankings, and an enhanced user experience that keeps visitors
    coming back.
  </p>

  <h4>Content Management Systems (CMS)</h4>
  <p>
    Manage your content effortlessly with intuitive CMS platforms such as WordPress,
    Wix, or custom-built solutions that give you complete control over updates,
    blogs, and pages.
  </p>

  <h4>E-commerce Integration</h4>
  <p>
    We integrate secure, scalable, and conversion-optimized e-commerce platforms
    that make online shopping smooth, simple, and successful for your customers.
  </p>

  <h4>Maintenance & Support</h4>
  <p>
    From regular updates to security monitoring, our dedicated team ensures your
    website stays secure, fast, and future-ready at all times.
  </p>

  <h3>Why Choose Manovate Technologies</h3>
  <ul>
    <li>
      <strong>User-Centered Approach:</strong>
      Every website is designed with your audience and business goals in mind.
    </li>
    <li>
      <strong>UI/UX Excellence:</strong>
      Modern design practices for intuitive navigation and strong visual appeal.
    </li>
    <li>
      <strong>SEO-Optimized Code:</strong>
      Clean, secure, and search-engine-friendly structure for maximum visibility.
    </li>
    <li>
      <strong>Proven Multi-Industry Experience:</strong>
      From tech to retail, we build solutions for businesses of all sizes.
    </li>
    <li>
      <strong>End-to-End Execution:</strong>
      Strategy, design, development, launch, and post-launch optimization—all handled in-house.
    </li>
    <li>
      <strong>Continuous Support:</strong>
      Ongoing enhancements to keep your digital presence powerful and relevant.
    </li>
  </ul>

  <h3>Empower Your Digital Presence</h3>
  <p>
    Your website is more than just an online address—it’s the face of your brand
    and the foundation of your digital success.
  </p>

  <p>
    Let’s build a website that not only looks great but performs brilliantly,
    drives traffic, converts leads, and strengthens your market presence.
  </p>
`

  },

  {
  id: "chatbot",
  title: "AI-Powered Chatbot Development Services",
  subtitle: "Intelligent Conversational AI Solutions for Customer Engagement",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we develop intelligent chatbot
      solutions that help businesses connect, engage, and support customers
      effortlessly.
    </p>

    <p>
      Our AI-driven chatbots use Natural Language Processing (NLP) and Machine
      Learning to understand user intent, respond naturally, and automate
      conversations that deliver instant support and better customer experiences
      across every digital touchpoint.
    </p>

    <h3>What We Deliver</h3>

    <h4>Conversational AI Bots</h4>
    <p>
      Engage users with intelligent, human-like conversations that adapt to tone,
      context, and intent—creating meaningful and interactive experiences.
    </p>

    <h4>Customer Support Automation</h4>
    <p>
      Automate FAQs, handle customer queries instantly, and provide round-the-clock
      assistance to improve satisfaction while reducing support workload.
    </p>

    <h4>Lead Generation Bots</h4>
    <p>
      Turn conversations into opportunities by capturing leads, qualifying prospects,
      and routing them to the right teams in real time.
    </p>

    <h4>E-commerce & Service Bots</h4>
    <p>
      Enable easy browsing, order tracking, and service requests through seamless
      chat experiences that enhance customer convenience.
    </p>

    <h4>System Integration</h4>
    <p>
      Connect chatbots with CRM, ERP, or business tools for unified communication,
      better decision-making, and automated workflows.
    </p>

    <h3>Why It Matters</h3>
    <ul>
      <li>Always-available engagement, anytime and anywhere</li>
      <li>Reduced manual workload and faster response times</li>
      <li>Personalized user experiences powered by AI insights</li>
      <li>Easy deployment across web, mobile, and messaging platforms</li>
      <li>Secure, scalable solutions adaptable to any business model</li>
    </ul>

    <h3>Built for Every Business</h3>
    <p>
      Whether you're a startup, SME, or enterprise, our chatbot solutions adapt
      to your workflows, audiences, and growth goals.
    </p>

    <p>
      From customer service and sales to internal operations and marketing, we help
      businesses across industries automate conversations and create meaningful
      digital engagement.
    </p>

    <h3>Our Approach</h3>
    <ol>
      <li>
        <strong>Discovery & Strategy:</strong>
        Understand objectives, users, and key challenges.
      </li>
      <li>
        <strong>Design & Development:</strong>
        Create tailored conversational flows and intelligent responses.
      </li>
      <li>
        <strong>Integration & Launch:</strong>
        Deploy across preferred platforms with enterprise-grade security.
      </li>
      <li>
        <strong>Training & Optimization:</strong>
        Continuously improve performance using analytics and AI learning.
      </li>
    </ol>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>Proven expertise in AI, automation, and digital transformation</li>
      <li>Custom chatbot solutions built for measurable business outcomes</li>
      <li>End-to-end delivery from design to deployment and ongoing support</li>
      <li>Scalable architecture that grows with your business</li>
      <li>Strong focus on engagement, efficiency, and customer loyalty</li>
    </ul>

    <h3>Let’s Automate the Way You Connect</h3>
    <p>
      Empower your business with AI-driven chatbots that deliver instant,
      intelligent, and impactful customer interactions.
    </p>

    <p>
      Partner with Manovate Technologies to bring automation, personalization,
      and innovation together.
    </p>
  `
},

  {
  id: "ecommerce",
  title: "E-Commerce Platform Development Services",
  subtitle: "Scalable, Secure, and Conversion-Focused Online Commerce Solutions",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we build powerful,
      conversion-focused e-commerce platforms that help businesses sell smarter,
      scale faster, and deliver seamless shopping experiences across every device.
    </p>

    <p>
      Our team designs, develops, and optimizes secure, high-performance online
      stores that attract customers, boost conversions, and keep sales growing,
      powered by the latest digital commerce trends.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom E-Commerce Development</h4>
    <p>
      We create fully customized online stores using leading technologies like
      Shopify, WooCommerce, Magento, and custom frameworks—designed around your
      business model and growth goals.
    </p>

    <h4>Omnichannel Shopping Experience</h4>
    <p>
      Integrate your store with websites, apps, social media, and marketplaces
      to provide customers with a consistent and connected shopping journey
      across all digital touchpoints.
    </p>

    <h4>Mobile-First Store Design</h4>
    <p>
      With mobile commerce dominating user behavior, we build responsive,
      mobile-optimized stores that deliver fast, intuitive checkout experiences
      on any device.
    </p>

    <h4>AI-Driven Personalization</h4>
    <p>
      Enhance engagement and sales with AI-powered product recommendations,
      smart search, and predictive analytics that understand user behavior.
    </p>

    <h4>Secure Payments & Data Protection</h4>
    <p>
      We implement multi-layer security, encrypted payment gateways, and
      GDPR-compliant systems to protect customer data and ensure smooth,
      trustworthy transactions.
    </p>

    <h4>Analytics & Performance Optimization</h4>
    <p>
      Gain data-driven insights with integrated dashboards that track sales,
      traffic, and user behavior—helping you make informed business decisions.
    </p>

    <h4>Maintenance & Scalability Support</h4>
    <p>
      We provide ongoing technical support, feature upgrades, and cloud-based
      scalability to ensure your platform performs flawlessly as traffic grows.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Expertise across Shopify, WooCommerce, Magento, and headless commerce
        frameworks
      </li>
      <li>
        Future-ready architecture using modern tools, APIs, and automation
      </li>
      <li>
        Proven ability to create conversion-optimized product pages and user flows
      </li>
      <li>
        Deep understanding of UX/UI trends for e-commerce in 2025
      </li>
      <li>
        SEO-friendly development and fast-loading stores for higher visibility
      </li>
      <li>
        Long-term partnership focused on performance, innovation, and results
      </li>
    </ul>

    <h3>Empower Your Online Business</h3>
    <p>
      Your e-commerce store isn’t just a sales channel—it’s your digital growth
      engine.
    </p>

    <p>
      Let’s build a platform that delivers speed, trust, and measurable success,
      helping your brand stand out in the competitive online marketplace.
    </p>
  `
}
,

  {
  id: "mobile-app",
  title: "Mobile Application Development Services",
  subtitle: "Custom Mobile App Solutions That Drive Engagement and Business Growth",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we create custom mobile applications
      that help businesses connect better with their customers, improve operations,
      and stay ahead in a mobile-first world.
    </p>

    <p>
      Our team builds intuitive, high-performance apps for Android and iOS that
      blend creativity with technology—delivering seamless user experiences that
      drive real business results.
    </p>

    <p>
      Whether you’re launching a new app or enhancing an existing solution, we
      design and develop mobile applications that are scalable, secure, and built
      to support long-term business growth.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom Mobile App Development</h4>
    <p>
      We design and develop apps that align with your business goals, brand
      identity, and customer needs—from concept and design to deployment.
    </p>

    <h4>Cross-Platform App Development</h4>
    <p>
      Using the latest frameworks like Flutter and React Native, we build apps
      that run smoothly across both Android and iOS using a single, efficient
      codebase.
    </p>

    <h4>Native App Development</h4>
    <p>
      For businesses that want peak performance, we create dedicated native apps
      for each platform with full hardware and OS-level integration.
    </p>

    <h4>User Interface & Experience Design</h4>
    <p>
      Our designs are simple, engaging, and user-friendly—ensuring every
      interaction feels natural and enjoyable.
    </p>

    <h4>API & System Integration</h4>
    <p>
      We connect your app with essential tools such as CRMs, payment gateways,
      and analytics platforms for smooth and efficient operations.
    </p>

    <h4>Maintenance and Support</h4>
    <p>
      After launch, we provide ongoing updates, monitoring, and optimization to
      keep your app secure, fast, and reliable.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>User-Focused Approach:</strong>
        Every app is designed to meet real customer needs and deliver measurable
        impact.
      </li>
      <li>
        <strong>Industry Versatility:</strong>
        We build apps for all types of businesses—from startups to enterprises.
      </li>
      <li>
        <strong>Agile and Transparent Process:</strong>
        Flexible development with regular progress updates.
      </li>
      <li>
        <strong>Scalable and Secure Solutions:</strong>
        Apps that perform well today and grow with your business.
      </li>
      <li>
        <strong>End-to-End Delivery:</strong>
        From concept to post-launch support, everything is handled by our
        in-house team.
      </li>
    </ul>

    <h3>Let’s Build Your App Together</h3>
    <p>
      Let’s create a mobile app that strengthens your brand, simplifies your
      processes, and delivers exceptional user experiences.
    </p>
  `
}
,

  {
  id: "custom-software",
  title: "Custom Software Development Services",
  subtitle: "Tailored Software Solutions That Simplify, Scale, and Drive Growth",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we develop custom software
      solutions designed to fit your unique business workflows and long-term
      goals.
    </p>

    <p>
      Our software helps you automate operations, enhance efficiency, and make
      smarter, data-driven decisions—while ensuring security, scalability, and a
      seamless user experience.
    </p>

    <p>
      Whether you’re modernizing legacy systems or building a new platform from
      scratch, our team delivers software that adapts to your business and grows
      with it.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom Business Applications</h4>
    <p>
      End-to-end software solutions tailored to your processes, helping your
      teams work smarter and faster.
    </p>

    <h4>Enterprise Software Development</h4>
    <p>
      Robust, secure, and scalable systems that simplify complex operations
      across departments and teams.
    </p>

    <h4>Workflow and Process Automation</h4>
    <p>
      Automate repetitive tasks and streamline day-to-day operations to boost
      productivity and reduce errors.
    </p>

    <h4>Web and Desktop Applications</h4>
    <p>
      Intuitive applications built with the latest technologies for high
      performance, usability, and flexibility.
    </p>

    <h4>Integration and Modernization</h4>
    <p>
      Upgrade existing systems and integrate multiple platforms to ensure
      seamless data flow and business continuity.
    </p>

    <h4>Maintenance and Support</h4>
    <p>
      Continuous monitoring, optimization, and updates to keep your software
      reliable, secure, and future-ready.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>Fully Custom-Built Solutions:</strong>
        Designed specifically for your business challenges and objectives.
      </li>
      <li>
        <strong>Scalable and Future-Ready:</strong>
        Software that grows as your organization expands.
      </li>
      <li>
        <strong>Strong Security Framework:</strong>
        Data protection and compliance built into every layer.
      </li>
      <li>
        <strong>Expert Development Team:</strong>
        Skilled professionals with experience across industries and technologies.
      </li>
      <li>
        <strong>Agile and Transparent Process:</strong>
        Clear communication and faster delivery with flexible project management.
      </li>
    </ul>

    <h3>Empower Your Business with Smart Software</h3>
    <p>
      Your business is unique, and your software should be too.
    </p>

    <p>
      Let’s create a solution that aligns perfectly with your goals—one that
      increases efficiency, improves collaboration, and drives measurable
      business success.
    </p>
  `
}
,

  {
  id: "workflow-automation",
  title: "Workflow Automation Services",
  subtitle: "Streamline Operations and Boost Productivity with Smart Automation",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we help businesses transform
      manual, time-consuming tasks into automated, efficient workflows.
    </p>

    <p>
      Our workflow automation solutions use advanced technologies like AI,
      machine learning, and process automation tools to simplify operations,
      reduce errors, and improve overall business performance.
    </p>

    <p>
      By automating repetitive processes, we enable your teams to focus on
      strategic work, speed up execution, and deliver consistent results across
      every department.
    </p>

    <h3>What We Deliver</h3>

    <h4>Business Process Automation</h4>
    <p>
      We automate day-to-day workflows such as approvals, reporting, and task
      management to increase speed, accuracy, and operational efficiency.
    </p>

    <h4>AI and Machine Learning Integration</h4>
    <p>
      Smart automation systems that learn and adapt, helping your business make
      faster, data-driven decisions.
    </p>

    <h4>Document and Data Automation</h4>
    <p>
      Automate document processing, data entry, and validation to eliminate
      manual effort and reduce errors.
    </p>

    <h4>Workflow Optimization</h4>
    <p>
      Identify inefficiencies in your processes and implement automation that
      enhances collaboration, visibility, and performance.
    </p>

    <h4>Integration with Existing Tools</h4>
    <p>
      Seamlessly connect automation across CRMs, ERPs, and other business
      software to ensure data consistency and real-time visibility.
    </p>

    <h4>Monitoring and Continuous Improvement</h4>
    <p>
      We provide insights and analytics to track workflow performance and
      fine-tune automation for better results over time.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>End-to-End Expertise:</strong>
        From identifying automation opportunities to full-scale implementation.
      </li>
      <li>
        <strong>Custom Solutions:</strong>
        Automation tailored to your specific workflows and business requirements.
      </li>
      <li>
        <strong>Multi-Industry Experience:</strong>
        Proven results across finance, healthcare, retail, logistics, and more.
      </li>
      <li>
        <strong>Secure and Scalable Framework:</strong>
        Reliable systems that grow with your organization.
      </li>
      <li>
        <strong>Proven ROI:</strong>
        Reduced costs, improved accuracy, and faster decision-making.
      </li>
    </ul>

    <h3>Transform How Your Business Operates</h3>
    <p>
      Empower your business with automation that eliminates bottlenecks,
      enhances productivity, and improves team collaboration.
    </p>

    <p>
      Let’s help you simplify complex operations and achieve measurable
      efficiency gains.
    </p>
  `
}
,

  {
  id: "recommendation-systems",
  title: "Recommendation System Development Services",
  subtitle: "Personalized Recommendations That Drive Engagement and Sales",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we build intelligent recommendation
      systems that deliver personalized product, content, and service suggestions
      to your customers in real time.
    </p>

    <p>
      Our solutions use Artificial Intelligence, Machine Learning, and Predictive
      Analytics to understand user behavior, preferences, and intent—helping
      businesses increase engagement, boost sales, and enhance customer experience.
    </p>

    <p>
      Whether you run an e-commerce platform, media site, or digital service, our
      recommendation engines ensure every customer sees what matters most to them.
    </p>

    <h3>What We Deliver</h3>

    <h4>Product Recommendation Engines</h4>
    <p>
      Smart algorithms that analyze purchase patterns and browsing behavior to
      suggest products customers are most likely to buy.
    </p>

    <h4>Content Recommendation Systems</h4>
    <p>
      Personalized recommendations for news, blogs, or media that keep users
      engaged and improve session time.
    </p>

    <h4>User Behavior Analysis</h4>
    <p>
      Data-driven insights that help understand individual customer preferences
      and predict future needs accurately.
    </p>

    <h4>AI-Powered Personalization</h4>
    <p>
      Machine learning models that adapt and evolve based on real-time user
      interactions to deliver better recommendations continuously.
    </p>

    <h4>Cross-Selling and Upselling Solutions</h4>
    <p>
      Recommend complementary or higher-value items to increase order value and
      enhance customer lifetime value.
    </p>

    <h4>Integration with Digital Platforms</h4>
    <p>
      Seamless integration with your e-commerce, CRM, or content platforms to
      deliver personalized experiences across all channels.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>Data-Driven Expertise:</strong>
        Deep understanding of AI and data modeling to deliver precise
        recommendations.
      </li>
      <li>
        <strong>Cross-Industry Applications:</strong>
        Ideal for e-commerce, media, healthcare, education, and more.
      </li>
      <li>
        <strong>Real-Time Personalization:</strong>
        AI systems that learn from each interaction to refine results instantly.
      </li>
      <li>
        <strong>Proven Impact:</strong>
        Boost conversion rates, engagement metrics, and customer retention.
      </li>
      <li>
        <strong>Scalable and Secure Solutions:</strong>
        Built to handle large data volumes while delivering reliable performance.
      </li>
    </ul>

    <h3>Deliver Personalized Experiences That Convert</h3>
    <p>
      Engage your customers with intelligent recommendations that inspire action
      and build loyalty.
    </p>

    <p>
      Let’s help you create a smarter digital experience powered by AI-driven
      personalization.
    </p>
  `
}
,
  {
  id: "machine-learning",
  title: "Machine Learning Solutions",
  subtitle: "Transform Data into Actionable Intelligence",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we deliver advanced machine
      learning solutions that help businesses make smarter, data-driven decisions
      and automate complex processes.
    </p>

    <p>
      Our ML models are designed to analyze patterns, predict outcomes, and
      continuously improve performance—giving your business a competitive edge
      in today’s fast-paced digital world.
    </p>

    <p>
      From predictive analytics to intelligent automation, we build solutions
      that turn raw data into measurable business value.
    </p>

    <h3>What We Deliver</h3>

    <h4>Predictive Analytics</h4>
    <p>
      Identify trends, forecast demand, and make informed decisions with
      accurate, data-backed predictions.
    </p>

    <h4>Data Classification and Clustering</h4>
    <p>
      Organize and segment data intelligently to uncover hidden patterns,
      relationships, and insights.
    </p>

    <h4>Natural Language Processing (NLP)</h4>
    <p>
      Enable machines to understand and respond to human language—powering
      chatbots, sentiment analysis, and voice recognition systems.
    </p>

    <h4>Computer Vision Solutions</h4>
    <p>
      Extract meaningful insights from images and videos through object
      detection, facial recognition, and visual analytics.
    </p>

    <h4>Recommendation and Personalization Models</h4>
    <p>
      Deliver personalized content, product suggestions, or offers that
      increase engagement and conversion rates.
    </p>

    <h4>Automation and Optimization Models</h4>
    <p>
      Use machine learning to improve workflows, reduce manual intervention,
      and optimize business operations.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>End-to-End ML Expertise:</strong>
        From data preparation to model training, deployment, and optimization.
      </li>
      <li>
        <strong>Proven Industry Experience:</strong>
        Solutions tailored for retail, finance, healthcare, education, logistics,
        and more.
      </li>
      <li>
        <strong>Custom-Built Algorithms:</strong>
        Designed to meet your specific business challenges and data needs.
      </li>
      <li>
        <strong>Scalable and Secure Systems:</strong>
        Reliable performance for both small and large-scale data environments.
      </li>
      <li>
        <strong>Continuous Improvement:</strong>
        Models that evolve and adapt as new data becomes available.
      </li>
    </ul>

    <h3>Empower Your Business with Machine Learning</h3>
    <p>
      Unlock the full potential of your data with AI-driven insights that
      improve accuracy, reduce costs, and drive innovation.
    </p>

    <p>
      Let’s build intelligent systems that help your business grow smarter
      every day.
    </p>
  `
}
,

{
  id: "computer-vision",
  title: "Computer Vision Solutions",
  subtitle: "Empowering Businesses with Intelligent Visual Insights",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we develop advanced computer
      vision solutions that help businesses see, analyze, and act on visual data
      in real time.
    </p>

    <p>
      Our AI-driven systems interpret images and videos with high accuracy,
      automating visual tasks and unlocking new levels of efficiency, security,
      and customer experience.
    </p>

    <p>
      Whether it’s detecting defects, recognizing faces, or tracking movement,
      our solutions enable smarter operations and data-driven decisions across
      industries.
    </p>

    <h3>What We Deliver</h3>

    <h4>Image Recognition and Analysis</h4>
    <p>
      Identify, classify, and tag objects or patterns within images to enhance
      decision-making and automation.
    </p>

    <h4>Video Analytics</h4>
    <p>
      Monitor, detect, and interpret activities in real time using intelligent
      video analysis for security, retail, and operations.
    </p>

    <h4>Facial Recognition Systems</h4>
    <p>
      Improve access control, user authentication, and customer engagement with
      secure and accurate facial recognition technology.
    </p>

    <h4>Object Detection and Tracking</h4>
    <p>
      Track products, people, or vehicles with precision for logistics,
      manufacturing, and smart city applications.
    </p>

    <h4>Quality Inspection and Automation</h4>
    <p>
      Automate visual inspection processes to detect defects, ensure compliance,
      and maintain consistent quality standards.
    </p>

    <h4>Augmented Reality (AR) Integration</h4>
    <p>
      Enhance user experiences with interactive AR features for training,
      product visualization, and marketing.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>AI-Powered Visual Intelligence:</strong>
        Solutions built using cutting-edge deep learning and neural network models.
      </li>
      <li>
        <strong>Cross-Industry Expertise:</strong>
        Applied across manufacturing, retail, security, healthcare, and automotive
        sectors.
      </li>
      <li>
        <strong>Custom and Scalable Solutions:</strong>
        Tailored to your business environment and adaptable as your needs grow.
      </li>
      <li>
        <strong>Seamless Integration:</strong>
        Designed to integrate with existing software, IoT systems, and cloud
        platforms.
      </li>
      <li>
        <strong>High Accuracy and Real-Time Processing:</strong>
        Optimized models for speed, precision, and reliable performance.
      </li>
    </ul>

    <h3>See Beyond Data with Computer Vision</h3>
    <p>
      Turn images and videos into valuable business intelligence. Our computer
      vision technology helps you automate complex visual tasks, reduce costs,
      and drive smarter decisions.
    </p>

    <p>
      Partner with us to bring innovation, speed, and accuracy to your business
      operations.
    </p>

    <p><strong>CTA:</strong> Contact us</p>
  `
}
,

{
  id: "aiot",
  title: "AIoT Solutions",
  subtitle: "Connecting Intelligence with Innovation",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we deliver AIoT solutions that
      combine the power of Artificial Intelligence (AI) with the Internet of
      Things (IoT) to create smarter, data-driven ecosystems.
    </p>

    <p>
      Our solutions help businesses connect devices, analyze data in real time,
      and automate operations for better efficiency, safety, and scalability.
    </p>

    <p>
      From smart manufacturing to connected healthcare and intelligent cities,
      we design AIoT systems that transform how businesses sense, decide, and act.
    </p>

    <h3>What We Deliver</h3>

    <h4>Smart Device Integration</h4>
    <p>
      Connect and manage devices, sensors, and machines seamlessly through
      intelligent networks that enable real-time monitoring and control.
    </p>

    <h4>Edge AI and Real-Time Analytics</h4>
    <p>
      Process data closer to the source with edge computing and AI, ensuring
      faster decisions and minimal latency.
    </p>

    <h4>Predictive Maintenance Systems</h4>
    <p>
      Reduce downtime and maintenance costs by predicting failures before they
      occur through data-driven insights.
    </p>

    <h4>Smart Manufacturing Solutions</h4>
    <p>
      Enable automated production lines, quality inspection, and resource
      optimization with AI-powered IoT systems.
    </p>

    <h4>Connected Infrastructure and Smart Cities</h4>
    <p>
      Enhance public safety, traffic management, and energy efficiency through
      integrated IoT and AI systems.
    </p>

    <h4>Data Security and Cloud Integration</h4>
    <p>
      Ensure secure data flow across connected devices with encryption, access
      control, and scalable cloud platforms.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>End-to-End AIoT Expertise:</strong>
        From strategy and sensor integration to AI model deployment and monitoring.
      </li>
      <li>
        <strong>Custom-Built Solutions:</strong>
        Designed for your industry’s specific needs and operational goals.
      </li>
      <li>
        <strong>Scalable and Secure Architecture:</strong>
        Built to handle growing data and evolving business demands.
      </li>
      <li>
        <strong>Cross-Industry Applications:</strong>
        Trusted across manufacturing, logistics, energy, healthcare, and retail.
      </li>
      <li>
        <strong>Data-Driven Efficiency:</strong>
        Enable intelligent automation and actionable insights across connected
        processes.
      </li>
    </ul>

    <h3>Elevate Your Business with Smart Connectivity</h3>
    <p>
      Transform your operations with intelligent AIoT ecosystems that connect
      devices, data, and decisions.
    </p>

    <p>
      At Manovate Technologies, we help you achieve operational excellence through
      real-time insights, automation, and innovation.
    </p>
  `
}
,

{
  id: "cloud-solutions",
  title: "Cloud Solutions & Integration",
  subtitle: "Seamless, Scalable, and Secure Cloud Transformation",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we deliver comprehensive cloud
      solutions and integration services that help businesses modernize their IT
      infrastructure, enhance scalability, and improve operational efficiency.
    </p>

    <p>
      Our experts specialize in building, managing, and maintaining cloud
      ecosystems that align with your business goals and accelerate digital
      transformation.
    </p>

    <p>
      Whether you are adopting cloud for the first time or optimizing existing
      systems, we ensure a smooth and secure transition that maximizes
      performance and cost efficiency.
    </p>

    <h3>What We Deliver</h3>

    <h4>Cloud Migration Services</h4>
    <p>
      Move your applications, data, and workloads to the cloud with zero
      disruption and optimized performance.
    </p>

    <h4>Multi-Cloud and Hybrid Cloud Integration</h4>
    <p>
      Integrate different cloud environments to achieve flexibility, resilience,
      and better cost management.
    </p>

    <h4>Cloud Infrastructure Management</h4>
    <p>
      Monitor, optimize, and maintain your cloud systems with proactive
      management and performance tuning.
    </p>

    <h4>Application Modernization</h4>
    <p>
      Upgrade legacy systems into cloud-native applications that improve
      agility, scalability, and speed to market.
    </p>

    <h4>Cloud Security and Compliance</h4>
    <p>
      Protect your cloud environment with advanced encryption, access control,
      and compliance aligned with global security standards.
    </p>

    <h4>Data Backup and Disaster Recovery</h4>
    <p>
      Ensure business continuity with reliable data protection, backup, and
      recovery solutions.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>Comprehensive Cloud Expertise:</strong>
        Strategy, migration, integration, and ongoing management under one roof.
      </li>
      <li>
        <strong>Cloud Professionals:</strong>
        Skilled teams experienced with AWS, Azure, and Google Cloud platforms.
      </li>
      <li>
        <strong>Cost-Optimized Solutions:</strong>
        Pay only for what you need with scalable and efficient infrastructure.
      </li>
      <li>
        <strong>Seamless Integration:</strong>
        Smooth connectivity across cloud, on-premises, and hybrid systems.
      </li>
      <li>
        <strong>24/7 Monitoring and Support:</strong>
        Continuous management to ensure uptime, security, and performance.
      </li>
    </ul>

    <h3>Accelerate Your Business with the Cloud</h3>
    <p>
      Empower your organization with cloud-first technology that enhances
      flexibility, reduces costs, and drives innovation.
    </p>

    <p>
      Partner with Manovate Technologies to unlock the full potential of cloud
      computing through seamless migration and intelligent integration.
    </p>
  `
}
,

{
  id: "saas-development",
  title: "SaaS Application Development",
  subtitle: "Scalable SaaS Application Development for Modern Businesses",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we design and develop SaaS
      applications that empower businesses to innovate faster, operate smarter,
      and scale without limits.
    </p>

    <p>
      Our team builds cloud-based software solutions that combine powerful
      functionality with intuitive user experiences, ensuring seamless
      performance and continuous availability.
    </p>

    <p>
      Whether you need a subscription-based platform, enterprise-grade software,
      or a product built to serve millions of users, we deliver SaaS solutions
      that meet global standards and drive measurable business results.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom SaaS Product Development</h4>
    <p>
      Design, develop, and deploy tailored SaaS products that align with your
      business model and market needs.
    </p>

    <h4>Multi-Tenant Architecture</h4>
    <p>
      Build secure and scalable systems that support multiple users or businesses
      with optimal data separation and reliability.
    </p>

    <h4>API Development and Integration</h4>
    <p>
      Enhance functionality and interoperability with robust APIs that connect
      third-party tools and services effortlessly.
    </p>

    <h4>Subscription Management Systems</h4>
    <p>
      Simplify billing, payments, and renewals with automated subscription and
      revenue management features.
    </p>

    <h4>Cloud Deployment and Maintenance</h4>
    <p>
      Deploy SaaS applications across leading platforms like AWS, Azure, or
      Google Cloud with continuous monitoring and updates.
    </p>

    <h4>User Experience and Performance Optimization</h4>
    <p>
      Ensure fast load times, smooth navigation, and responsive designs that keep
      users engaged and satisfied.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>Proven SaaS Expertise:</strong>
        Experience in building scalable, high-performance SaaS platforms across
        industries.
      </li>
      <li>
        <strong>Agile Development Approach:</strong>
        Faster go-to-market with flexible, iterative development cycles.
      </li>
      <li>
        <strong>Secure and Compliant Solutions:</strong>
        Enterprise-grade security aligned with global standards like GDPR and ISO.
      </li>
      <li>
        <strong>Data-Driven Scalability:</strong>
        Built to handle growth and changing user demands seamlessly.
      </li>
      <li>
        <strong>Continuous Support and Upgrades:</strong>
        We ensure your SaaS product evolves with your business and technology
        trends.
      </li>
    </ul>

    <h3>Transform Your Idea into a Successful SaaS Product</h3>
    <p>
      Turn your vision into a reliable, cloud-based solution that delivers real
      value to users.
    </p>

    <p>
      With Manovate Technologies, you get more than just software—you gain a
      partner dedicated to innovation, scalability, and long-term success.
    </p>
  `
}
,

{
  id: "ucaas",
  title: "Unified Communications (UCaaS)",
  subtitle: "Simplify Collaboration and Empower Seamless Communication",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we deliver Unified Communications
      as a Service (UCaaS) solutions that bring together voice, messaging,
      video, and collaboration tools into one powerful cloud-based platform.
    </p>

    <p>
      Our UCaaS services help businesses connect teams, customers, and partners
      effortlessly—improving productivity and reducing communication costs.
    </p>

    <p>
      Whether your workforce is on-site, remote, or hybrid, we enable smarter
      communication through AI-powered, scalable, and integrated platforms that
      keep your business connected from anywhere.
    </p>

    <h3>What We Deliver</h3>

    <h4>Cloud-Based Voice and Telephony</h4>
    <p>
      High-quality VoIP calling and PBX systems that ensure reliable,
      cost-effective communication across all locations.
    </p>

    <h4>Video Conferencing Solutions</h4>
    <p>
      HD video meetings with screen sharing, recording, and collaboration
      features for seamless real-time interaction.
    </p>

    <h4>AI-Powered Collaboration Tools</h4>
    <p>
      Enhance team productivity with intelligent features such as automated
      meeting transcriptions, smart summaries, sentiment analysis, and AI-driven
      chat assistance.
    </p>

    <h4>Team Messaging and File Sharing</h4>
    <p>
      Centralized communication through chat, file sharing, and workflow
      management to keep everyone aligned and productive.
    </p>

    <h4>Mobile and Remote Access</h4>
    <p>
      Stay connected across devices with secure mobile apps that enable anytime,
      anywhere communication.
    </p>

    <h4>Analytics and Reporting</h4>
    <p>
      AI-based analytics to monitor usage, performance, and engagement—driving
      data-driven improvements in communication efficiency.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        <strong>Comprehensive UCaaS Expertise:</strong>
        Design, implementation, and management tailored to your business needs.
      </li>
      <li>
        <strong>AI-Enhanced Communication:</strong>
        Intelligent automation and insights for faster, smarter collaboration.
      </li>
      <li>
        <strong>Scalable Cloud Infrastructure:</strong>
        Flexible systems that evolve with your team and operational growth.
      </li>
      <li>
        <strong>Enterprise-Grade Security:</strong>
        Strong encryption and compliance for secure, reliable communication.
      </li>
    </ul>

    <h3>Empower Your Business with Intelligent Communication</h3>
    <p>
      Transform your workplace communication with AI-driven UCaaS solutions that
      simplify collaboration, enhance productivity, and reduce costs.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to unify your business
      communication through an intelligent, cloud-based, and future-ready
      platform.
    </p>
  `
}
,

{
  id: "crm-systems",
  title: "CRM Systems",
  subtitle: "Build Stronger Customer Relationships with Smarter CRM Solutions",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we design and implement Customer
      Relationship Management (CRM) systems that help businesses manage leads,
      enhance customer engagement, and drive sales growth.
    </p>

    <p>
      Our CRM solutions provide a unified platform to track interactions,
      automate marketing, and improve customer service across all touchpoints.
    </p>

    <p>
      Whether you need a simple CRM for lead tracking or a fully customized
      solution integrated with your existing systems, we deliver platforms that
      improve productivity, visibility, and decision-making.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom CRM Development</h4>
    <p>
      Tailored CRM platforms built around your business model, sales process,
      and customer lifecycle.
    </p>

    <h4>Sales and Marketing Automation</h4>
    <p>
      Automate workflows, follow-ups, and campaigns to increase conversion rates
      and shorten sales cycles.
    </p>

    <h4>Customer Service and Support Management</h4>
    <p>
      Manage customer interactions efficiently with centralized support tools,
      ticketing systems, and response tracking.
    </p>

    <h4>Analytics and Reporting Dashboards</h4>
    <p>
      Access real-time insights into customer behavior, pipeline performance,
      and campaign ROI.
    </p>

    <h4>Integration and Migration Services</h4>
    <p>
      Connect your CRM with ERP systems, websites, and third-party applications
      for seamless data flow.
    </p>

    <h4>Mobile CRM Solutions</h4>
    <p>
      Empower your teams to manage leads, calls, and opportunities from any
      device, anytime.
    </p>

    <h4>Data Security and Compliance</h4>
    <p>
      Protect customer and business data with advanced encryption, role-based
      access control, and compliance with global and regional data privacy
      regulations.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Proficient in delivering and integrating CRM solutions using platforms
        such as Salesforce, HubSpot, Zoho, and tailor-made systems
      </li>
      <li>
        Scalable and secure CRM architectures designed for growing businesses
      </li>
      <li>
        Industry-specific CRM customization for retail, healthcare, finance,
        and more
      </li>
      <li>
        Data-driven insights to improve customer retention and loyalty
      </li>
      <li>
        Continuous support and training for your internal teams
      </li>
    </ul>

    <h3>Enhance Customer Experience with Smart CRM Solutions</h3>
    <p>
      Improve relationships, streamline sales, and gain a complete view of your
      customers.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to implement a CRM
      system that turns relationships into revenue.
    </p>
  `
}
,

{
  id: "erp-systems",
  title: "ERP Systems",
  subtitle: "Streamline Operations with Intelligent ERP Solutions",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we deliver Enterprise Resource
      Planning (ERP) systems that unify business operations, improve productivity,
      and provide complete visibility across departments.
    </p>

    <p>
      Our ERP solutions integrate finance, inventory, HR, supply chain, and
      operations into one centralized system that drives efficiency and
      informed decision-making.
    </p>

    <p>
      We help businesses replace fragmented processes with a single, intelligent
      platform that adapts to your workflow and scales with your growth.
    </p>

    <h3>What We Deliver</h3>

    <h4>Custom ERP Development</h4>
    <p>
      ERP systems tailored to your industry, business processes, and specific
      operational requirements.
    </p>

    <h4>Modular ERP Implementation</h4>
    <p>
      Flexible deployment with modules for accounting, HR, procurement,
      inventory, and production.
    </p>

    <h4>Integration and Migration</h4>
    <p>
      Seamless connection of ERP systems with CRM, e-commerce platforms, and
      other enterprise tools.
    </p>

    <h4>Real-Time Data and Analytics</h4>
    <p>
      Access accurate, real-time business intelligence to support strategic,
      data-driven decision-making.
    </p>

    <h4>Cloud-Based and On-Premise Solutions</h4>
    <p>
      Choose from scalable cloud ERP or secure on-premise deployments based on
      your IT strategy and compliance needs.
    </p>

    <h4>Automation and Optimization</h4>
    <p>
      Automate repetitive processes to improve efficiency, accuracy, and
      operational compliance.
    </p>

    <h4>Data Security and Compliance</h4>
    <p>
      Ensure the protection of sensitive business data through strong
      encryption, access controls, and full compliance with global and regional
      data privacy regulations.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Highly proficient in implementing and customizing top ERP systems
        including SAP, Oracle, and Microsoft Dynamics
      </li>
      <li>
        Proven track record in multi-industry ERP implementation
      </li>
      <li>
        Strong focus on data security, performance, and scalability
      </li>
      <li>
        Streamlined integration with existing IT infrastructure
      </li>
      <li>
        Ongoing support, maintenance, and system optimization
      </li>
    </ul>

    <h3>Transform Business Efficiency with Scalable ERP Solutions</h3>
    <p>
      Empower your organization with a connected ERP system that simplifies
      workflows, reduces costs, and enhances visibility across all departments.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to modernize your
      enterprise operations and achieve sustainable growth.
    </p>
  `
},

{
  id: "hrms",
  title: "Human Resource Management Systems (HRMS)",
  subtitle: "Smarter HR Solutions That Simplify Workforce Management",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we develop and implement Human
      Resource Management Systems (HRMS) that streamline every aspect of
      workforce management—from recruitment and onboarding to payroll and
      compliance.
    </p>

    <p>
      Our HRMS solutions empower businesses to manage employees efficiently,
      automate routine HR tasks, and gain valuable workforce insights through
      intuitive dashboards and analytics.
    </p>

    <p>
      Whether your organization is small or large, our HRMS platforms are built
      to simplify complex HR processes, ensure compliance, and improve employee
      engagement.
    </p>

    <h3>What We Deliver</h3>

    <h4>HR Process Automation</h4>
    <p>
      Automate repetitive tasks such as attendance tracking, leave requests, and
      data management to save time and reduce errors.
    </p>

    <h4>Payroll and Compliance Management</h4>
    <p>
      Handle salary processing, tax calculations, and statutory compliance
      accurately with built-in automation and reporting tools.
    </p>

    <h4>Recruitment and Onboarding</h4>
    <p>
      Simplify the hiring journey with integrated modules for candidate tracking,
      onboarding, and performance setup.
    </p>

    <h4>Performance and Appraisal Management</h4>
    <p>
      Monitor KPIs, conduct reviews, and align employee goals with business
      objectives using data-driven insights.
    </p>

    <h4>Employee Self-Service Portals</h4>
    <p>
      Empower employees to manage their profiles, leaves, requests, and payslips
      through secure, user-friendly dashboards.
    </p>

    <h4>Analytics and Reporting</h4>
    <p>
      Gain actionable insights into workforce productivity, attendance trends,
      and HR efficiency with detailed analytics.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Proficient in developing scalable HRMS solutions tailored to diverse
        industries
      </li>
      <li>
        Integration-ready platforms compatible with payroll, ERP, and CRM
        systems
      </li>
      <li>
        Enhanced data security and compliance with global HR standards
      </li>
      <li>
        Custom modules built for your specific HR processes and organizational
        hierarchy
      </li>
      <li>
        Ongoing support and system upgrades to ensure peak performance
      </li>
    </ul>

    <h3>Empower Your Workforce with Intelligent HRMS Solutions</h3>
    <p>
      Simplify HR management, ensure compliance, and create a more connected,
      productive workplace.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to implement a Human
      Resource Management System that transforms how your business manages
      people.
    </p>
  `
}
,

{
  id: "inventory-management",
  title: "Inventory Management Systems",
  subtitle: "Real-Time Inventory Management Solutions That Drive Efficiency and Control",
  content: `
    <h3>Overview</h3>
    <p>
      At <strong>Manovate Technologies</strong>, we design and implement Inventory
      Management Systems that help businesses monitor, control, and optimize
      inventory with accuracy and speed.
    </p>

    <p>
      Our solutions give you real-time visibility into stock levels, order
      statuses, and supply chain performance—ensuring products are tracked
      efficiently from procurement to delivery.
    </p>

    <p>
      Our inventory management platforms empower businesses across warehouses,
      retail, and distribution networks to reduce errors, forecast demand
      accurately, and enhance overall operational performance.
    </p>

    <h3>What We Deliver</h3>

    <h4>Real-Time Inventory Tracking</h4>
    <p>
      Monitor stock levels, product movement, and reorder points in real time to
      prevent stockouts and overstocking.
    </p>

    <h4>Automated Replenishment</h4>
    <p>
      Set intelligent restocking alerts and automate purchase orders based on
      demand and sales trends.
    </p>

    <h4>Multi-Location Inventory Control</h4>
    <p>
      Easily manage and sync inventory across multiple warehouses, stores, or
      regions from a single dashboard.
    </p>

    <h4>Barcode and RFID Integration</h4>
    <p>
      Improve accuracy and speed in inventory updates with advanced scanning,
      tagging, and tracking capabilities.
    </p>

    <h4>Analytics and Forecasting</h4>
    <p>
      Leverage predictive analytics to understand demand patterns and make
      data-driven restocking decisions.
    </p>

    <h4>Seamless System Integration</h4>
    <p>
      Integrate your inventory management software with ERP, CRM, and
      e-commerce platforms for smooth data flow and operational transparency.
    </p>

    <h3>Why Choose Manovate Technologies</h3>
    <ul>
      <li>
        Expertise in custom and cloud-based inventory management solutions
      </li>
      <li>
        Real-time analytics for faster decision-making and improved accuracy
      </li>
      <li>
        Scalable platforms designed for small businesses and large enterprises
        alike
      </li>
      <li>
        Enhanced security and reliability to safeguard business data
      </li>
      <li>
        Continuous support, upgrades, and performance monitoring
      </li>
    </ul>

    <h3>Optimize Inventory, Maximize Efficiency</h3>
    <p>
      Gain complete visibility and control over your supply chain with a
      powerful, data-driven Inventory Management System.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to streamline
      operations, reduce costs, and ensure your products are always where they
      need to be.
    </p>
  `
}
,

{
  id: "cybersecurity",
  title: "Cybersecurity Services",
  subtitle: "Comprehensive Cybersecurity Solutions to Safeguard Your Business",
  content: `
    <h3>Overview</h3>
    <p>
      In today’s digital landscape, every organization needs strong protection
      against data breaches and online threats. At
      <strong>Manovate Technologies</strong>, we help businesses secure their
      systems, networks, and applications with practical, scalable cybersecurity
      services.
    </p>

    <p>
      Our focus is on prevention, detection, and continuous monitoring to keep
      your operations safe and compliant. From safeguarding sensitive data to
      managing risk effectively, we help you maintain trust and business
      continuity.
    </p>

    <h3>Our Key Cybersecurity Solutions</h3>

    <h4>Network and Infrastructure Security</h4>
    <p>
      Safeguard servers, endpoints, and communication systems from unauthorized
      access using advanced network defense tools and regular system audits.
    </p>

    <h4>Application and Cloud Security</h4>
    <p>
      Ensure your web, mobile, and cloud applications are built and maintained
      with secure architecture and proactive vulnerability management.
    </p>

    <h4>Data Protection and Compliance</h4>
    <p>
      Protect sensitive business data through encryption, access control, and
      compliance with international data security standards.
    </p>

    <h4>Threat Monitoring and Response</h4>
    <p>
      Identify and respond to suspicious activity quickly with intelligent
      threat detection and managed response systems.
    </p>

    <h4>Security Testing and Assessments</h4>
    <p>
      Uncover and address system weaknesses through penetration testing,
      vulnerability assessments, and periodic security reviews.
    </p>

    <h3>Why Businesses Choose Manovate Technologies</h3>
    <ul>
      <li>
        Balanced approach combining technology, expertise, and best security
        practices
      </li>
      <li>
        Solutions tailored to each organization’s size, sector, and risk level
      </li>
      <li>
        Regular updates and reporting to stay ahead of evolving threats
      </li>
      <li>
        Support from skilled cybersecurity professionals with hands-on
        experience
      </li>
    </ul>

    <h3>Protect What Drives Your Business Forward</h3>
    <p>
      Secure your data, systems, and customers with trusted cybersecurity
      services.
    </p>

    <p>
      Partner with <strong>Manovate Technologies</strong> to build a resilient and
      secure digital foundation ready for the challenges of today’s connected
      world.
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
        <h2>IT Services</h2>
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