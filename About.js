import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    AOS.init();
    useEffect(() => {
        AOS.init({ duration: 1200, offset: 200 });
    }, []);

    return (
        <div className="about-page">
            <Header />


            {/* Hero Section */}
<section className="about-hero" data-aos="fade-up">
    <div className="about-container" style={{ marginTop: '-180px' }}>
        <div className="about-hero-content">
            {/* Left Content: Image */}
            <div className="about-hero-image">
                <img 
                    src={`${process.env.PUBLIC_URL}/14.png`} 
                    alt="About Us Hero" 
                    className="about-responsive-image" 
                />
            </div>

            {/* Right Content: Text */}
            <div className="hero-text">
                <h1>ABOUT US</h1>
                <p>
                    Nexivora Technologies began with a mission to empower businesses with innovative 
                    and customized solutions. From startups to enterprises, we deliver scalable 
                    strategies that foster growth, efficiency, and excellence in every project we undertake.
                </p>
                <p>
                    From startups to enterprises, we empower businesses to embrace the future with scalable, 
                    reliable, and innovative solutions that make a difference.
                </p>
            </div>
        </div>
    </div>
</section>



{/* About Section 2 */}
<section className="about-section2" data-aos="fade-up" style={{ marginTop: '-90px' }}>
    <div className="about-container">
        <div className="about-hero-content">
            {/* Left Content: Text */}
            <div className="about-section2-text">
                <h2>Who We Are</h2>
                <p>
                    At <strong>Nexivora Technologies</strong>, we provide cutting-edge solutions to help businesses achieve 
                    digital transformation and operational excellence. Our passion for innovation drives us 
                    to craft technology solutions tailored to our clients' unique needs.
                </p>
                <p>
                    From startups to enterprises, we empower businesses to embrace the future with scalable, 
                    reliable, and innovative solutions that make a difference.
                </p>
                
            </div>

            {/* Right Content: Image */}
            <div className="about-section2-image">
                <img 
                    src={`${process.env.PUBLIC_URL}/16.png`} 
                    alt="About Section 2" 
                    className="about-section2-responsive-image" 
                />
            </div>
        </div>
    </div>
</section>



{/* Mission, Vision, and Values */}
<section className="mission-vision-values">
    <div className="container">
        <div className="mission card" data-aos="fade-up" data-aos-duration="1000">
            <h3>Our Mission</h3>
            <p>To empower businesses with innovative and reliable technology solutions.</p>
        </div>
        <div className="vision card" data-aos="fade-up" data-aos-duration="1200">
            <h3>Our Vision</h3>
            <p>To be the most trusted partner in digital transformation and technological innovation.</p>
        </div>
        <div className="values card" data-aos="fade-up" data-aos-duration="1400">
            <h3>Our Core Values</h3>
            <ul>
                <li>Integrity and Transparency</li>
                <li>Innovation and Excellence</li>
                <li>Commitment to Client Success</li>
            </ul>
        </div>
    </div>
</section>


{/* Timeline or History */}
<section className="timeline">
    <div className="timeline-container">
        <h2 data-aos="fade-up">Our Journey</h2>
        <div className="timeline-container">
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>2015</h3>
                    <p>Company founded with a focus on web development.</p>
                </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>2017</h3>
                    <p>Expanded into mobile app development and UI/UX design.</p>
                </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>2019</h3>
                    <p>Launched cloud-based solutions for businesses worldwide.</p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>2023</h3>
                    <p>Recognized as a leader in digital transformation.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Meet the Team */}
<section className="meet-the-team">
    <div className="container">
        <h2 data-aos="zoom-in">Leadership Team</h2>

        {/* Spotlight Card for CEO */}
        <div className="team-spotlight" data-aos="fade-right">
            <img src="musaddique.jpg" alt="Musaddique" className="spotlight-image" />
            <div className="spotlight-info">
                <h3>Musaddique Wahid</h3>
                <p>CEO & Founder</p>
                <p>
                    A visionary leader passionate about innovation and excellence. With over a decade of experience, 
                    musaddique has driven the company to become a leader in digital transformation.
                </p>
               
            </div>
        </div>

        <div className="team-spotlight" data-aos="fade-right">
            <img src="Ali.jpeg" alt="Ali" className="spotlight-image" />
            <div className="spotlight-info">
                <h3>Muhammad Ali</h3>
                <p>Co Founder</p>
                <p>
                    A visionary leader passionate about innovation and excellence. With over a decade of experience, 
                    Ali has driven the company to become a leader in digital transformation.
                </p>
               
            </div>
        </div>

        {/* Grid Layout for Team Members */}
        <div className="team-grid">
            <div className="team-card" data-aos="fade-up" data-aos-delay="100">
                <img src="brat.jpeg" alt="Brat" />
                <div className="team-info">
                    <h4>Smith</h4>
                    <p>CTO</p>
                </div>
            </div>
            <div className="team-card" data-aos="fade-up" data-aos-delay="200">
                <img src="pit.jpg" alt="Michael Johnson" />
                <div className="team-info">
                    <h4>Michael</h4>
                    <p>Lead Developer</p>
                </div>
            </div>
            <div className="team-card" data-aos="fade-up" data-aos-delay="300">
                <img src="who-we-are.jpg" alt="Sophia Brown" />
                <div className="team-info">
                    <h4>Sophia Brown</h4>
                    <p>Marketing Manager</p>
                </div>
            </div>
        </div>
    </div>
</section>

            {/* Why Choose Us */}
            <section className="why-choose-us" data-aos="zoom-in">
                <div className="why-choose-us-container">
                    <h2>Why Choose Nexivora?</h2>
                    <ul>
                        <li>Expert team with years of experience in digital solutions.</li>
                        <li>Customer-centric approach with tailored services.</li>
                        <li>Commitment to delivering exceptional value and results.</li>
                    </ul>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section" data-aos="fade-up">
                <div className="container">
                    <h2>Let’s Build the Future Together</h2>
                    <p>Contact us today to discuss how we can  work together to achieve your business goals.</p>
                    <button className="cta-button">Get in Touch</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;