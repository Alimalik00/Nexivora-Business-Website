import React, { useEffect } from 'react';
import './Testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, offset: 200 }); // Initialize AOS
    }, []);

    const testimonialsData = [
        {
            id: 1,
            text: "“Working with Nexivora Technologies has been a game-changer for us. Their expertise and dedication to quality are unmatched.”",
            author: "Sarah Collins",
            job: "Marketing Manager",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-1.png",
        },
        {
            id: 2,
            text: "“Their innovative solutions transformed our digital presence, resulting in significant growth and customer satisfaction.”",
            author: "David Smith",
            job: "CEO of Smith Enterprises",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
        },
        {
            id: 3,
            text: "“The team at Nexivora exceeded our expectations by delivering exceptional results on time. Highly recommend them!”",
            author: "Emily Johnson",
            job: "Project Lead",
            avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png",
        },
    ];

    return (
        <section className="testimonials-section">
            <div className="testimonial-container">
                <div className="testimonial-text-center" data-aos="fade-down">
                    <p className="subheading">2,157 people have said how good Nexivora is</p>
                    <h2 className="testimonial-main-heading">Our happy clients say about us</h2>
                </div>

                <div className="testimonials-cards">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            className="testimonial-card"
                            key={testimonial.id}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className="testimonial-content">
                                <div className="rating">
                                    {[...Array(5)].map((_, idx) => (
                                        <svg
                                            key={idx}
                                            className="rating-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <blockquote className="testimonial-text">
                                    <p>{testimonial.text}</p>
                                </blockquote>
                            </div>
                            <div className="testimonial-author">
                                <img
                                    className="author-avatar"
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                />
                                <div className="author-details">
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-job">{testimonial.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
