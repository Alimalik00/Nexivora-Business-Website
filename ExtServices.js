import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ExtServices.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';
import Services from './Services';
import PricingSection from "./PricingSection";

const ExtServices = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1200, offset: 200 }); // Initialize AOS
    }, []);

    const handleServiceClick = () => {
        navigate('/contact');
    };

    return (
        <div className="services-page">
            {/* Header Section */}
            <Header />
            <div className="services-header" >
                <img
                    src="page2.jpg" // Replace with your actual image URL
                    alt="Our Services"
                    className="header-image"
                />
            </div>

            {/* services Section */}  
            <PricingSection/>

            {/* services Section */}  
            <Services/>

            {/* Consultation Section */}
            <div className="consultation-section-services" data-aos="zoom-in">
                <div className="consultation-content-services">
                    <h2>Want to Schedule a Free Consultation Meeting?</h2>
                    <p>Try us – book your consultation right now and let’s strategize together!</p>
                    <button className="consultation-button-services">Schedule Strategy Call</button>
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section" data-aos="fade-up">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <p>Have a question? Reach out to us for any of these services!</p>
                    </div>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ExtServices;
