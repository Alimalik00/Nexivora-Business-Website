import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200 }); // Initialize AOS
    }, []);

    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            icon: 'coding.png',
            title: 'Web Development',
            description: 'Customized web apps for seamless user experience.',
            animation: 'fade-right', // AOS animation for this card
        },
        {
            id: 2,
            icon: 'mobile-development.png',
            title: 'Mobile Development',
            description: 'Innovative mobile apps to enhance your digital presence.',
            animation: 'fade-left',
        },
        {
            id: 3,
            icon: 'ui.png',
            title: 'UI/UX Design',
            description: 'Creating visually appealing and user-friendly interfaces.',
            animation: 'zoom-in',
        },
        {
            id: 4,
            icon: 'cloud.png',
            title: 'Cloud Solutions',
            description: 'Scalable cloud services tailored to your business.',
            animation: 'zoom-in-up',
        }, 
            {

            id: 5,
            icon: 'ai.png',
            title: 'Generative Ai',
            description: 'Customized Generative models for your business needs.',
            animation: 'fade-right', // AOS animation for this card
        },
        {
            id: 6,
            icon: 'devops.png',
            title: 'DevOps',
            description: 'Innovative DevOps solutions to enhance your digital presence.',
            animation: 'fade-left',
        },
        {
            id: 7,
            icon: 'qatesting.png',
            title: 'QA Testing',
            description: 'Modern QA Testing for your web and desktop apps.',
            animation: 'zoom-in',
        },
        {
            id: 8,
            icon: 'customsoftware.png',
            title: 'Custom Software',
            description: 'Creating custom and user-friendly setups for your business needs.',
            animation: 'zoom-in-up',
        },
    ];

    const handleServiceClick = (serviceTitle) => {
        console.log(`Navigating to Schedule Call for: ${serviceTitle}`);
        navigate('/schedule-call');
    };

    return (
        <section className="services-section">
            <h2 data-aos="fade-down">Our Services</h2>
            <p data-aos="fade-up">Explore the wide range of services we offer to empower your business.</p>

            <Link to="/ext-services">
                <button className="primary-btn" data-aos="fade-up">Learn More</button>
            </Link>

            <div className="services-container">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="service-card"
                        onClick={() => handleServiceClick(service.title)}
                        data-aos={service.animation} // Apply individual animations
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/${service.icon}`}
                            alt={`${service.title} Icon`}
                            className="service-icon"
                            loading="lazy"
                        />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
