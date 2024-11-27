import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <h1>GET IN TOUCH WITH US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon">&#127969;</div>
            <div>
              <h4>Our Location</h4>
              <p>99 St. Jomblo Park Pekanbaru 28292, USA</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">&#128222;</div>
            <div>
              <h4>Phone Number</h4>
              <p>(+62) 81 414 257 9980</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">&#128231;</div>
            <div>
              <h4>Email Address</h4>
              <p>info@nexivora.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
            <div className="background-elements">
                    <div className="circle"></div>
                    <div className="dots"></div>
            </div>
    </div>

    
  );
};

export default ContactForm;
