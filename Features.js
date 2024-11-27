import React from 'react';
import './Features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Features = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, offset: 200 }); // Initialize AOS
    }, []);

    
    const features = [
        {
            id: 1,
            title: 'Innovative Solutions',
            description: 'We bring cutting-edge technology solutions tailored to your business needs.',
        },
        {
            id: 2,
            title: 'Expert Support',
            description: 'Our team of experts provides dedicated support at every step of your journey.',
        },
        {
            id: 3,
            title: 'Empowering Your Success',
            description: 'Our solutions are designed to drive growth and help your business succeed.',
        },
    ];

    return (
        <section className="features-section" id="features">
            <h2>Our features</h2>
            <div className="features-container">
                {features.map((feature) => (
                    
                    <div key={feature.id} className="feature-item" data-aos="fade-up">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
