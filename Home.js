import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import ConsultationSection from './ConsultationSection';
import ProjectsSection from './ProjectsSection';

function Home() {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    navigate('/schedule-call'); // Navigate to the Schedule Call page
  };

  return (
    <div className="App">
      <Header />

      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/herobg.png)`,
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Business with <br /> Nexivora Technologies
          </h1>
          <p className="hero-subtitle">
            Unlock your business potential with our expert services tailored to your unique needs.
          </p>
          <div className="hero-buttons">
            <Link to="/schedule-call">
              <button className="secondary-btn">Get Started Today</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Enterprises Section */}
      <div className="enterprises">
        <div className="enterprises-logos">
          <img src="saasons-logo.png" alt="Saasons" />
          <img src="taj-resi-logo.png" alt="Taj Residencia" />
          <img src="Pepsi-New-2023.png" alt="Pepsi" />
          <img src="west-investment-logo.png" alt="West Investment" />
          <img src="runaway-png-logo.png" alt="Runaway" />
          <img src="D-square.png" alt="Design Doctors" />
          
        </div>
      </div>

      {/* Other Sections */}

      <Features />
      <Services />
      <ProjectsSection/>
      <ConsultationSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
