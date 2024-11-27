import React, { useEffect } from 'react';
import './ScheduleCall.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const ScheduleCall = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, offset: 200 }); // Initialize AOS
    }, []);

    return (
        <div className="schedule-call-container">
            <Header />
            <div className="schedule-content">
                <div className="schedule-left" data-aos="fade-right">
                    <h2>Schedule Your Strategy Call</h2>
                    <p>
                        Let’s discuss how we can help you achieve your business goals. Book a time that works best for you!
                    </p>
                </div>
                <div className="schedule-form-card" data-aos="fade-left">
                    <form className="schedule-form">
                        <label>
                            Name:
                            <input type="text" placeholder="Your name" required pattern="[A-Za-z\s]+" title="Name should only contain letters and spaces" />
                        </label>
                        <label>
                            Email:
                            <input type="email" placeholder="Your email" required />
                        </label>
                        <label>
                            Preferred Date:
                            <input type="date" required />
                        </label>
                        <label>
                            Preferred Time:
                            <input type="time" required />
                        </label>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ScheduleCall;
