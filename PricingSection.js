import React from "react";
import "./PricingSection.css";



const PricingSection = () => {
  return (
    <div className="pricing-section">
      <div className="left-section" >
        <h3 className="pricing-title">Pricing</h3>
        <h1 className="main-heading" >
          We leverage the <span className="highlight">latest advancements in AI</span> to deliver
          the highest quality technology, <span className="highlight">on time and on budget</span>.
        </h1>
        <p className="description">
          We’ve been helping customers since 2009 and take pride in delivering
          high-quality custom services designed to help you build, grow, and
          revolutionize your business.
        </p>
        <button className="reviews-button">See Our Reviews</button>
        <div className="stats">
          <div className="stat-item">
            <h3>236+</h3>
            <p>Active Clients</p>
          </div>
          <div className="stat-item">
            <h3>3,000+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>23+</h3>
            <p>Countries Supported</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h3 className="starting-from">Starting from</h3>
        <h2 className="price">$22 / hr</h2>
        <button className="contact-button">Contact Us</button>
        <p className="right-description">
          With tools like ChatGPT and CoPilot, software development is being
          rapidly enabled by machines. Devsinc engineers are trained with these
          technologies, improving the ROI of your project.
        </p>
        <p className="right-description">
          Experience working with us for 2 weeks completely free of charge.
        </p>
        <p className="guarantee">
          We guarantee that we will make a positive impact on your project or
          continue working for free until we do.
        </p>
        <hr />
        <div className="services">
          <div className="service-item">
            <span>✔</span>
            <div>
              <strong>Software Outsourcing</strong>
              <p>Let us handle end-to-end delivery with complete software development outsourcing.</p>
            </div>
          </div>
          <div className="service-item">
            <span>✔</span>
            <div>
              <strong>Staff Augmentation</strong>
              <p>Add talent to your existing team through Devsinc and save time on sourcing, recruiting, and training.</p>
            </div>
          </div>
          <div className="service-item">
            <span>✔</span>
            <div>
              <strong>Dedicated Teams</strong>
              <p>Move faster with a dedicated and functional team to your existing software development process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
