import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConsultationSection.css'; // Link the updated CSS

const ConsultationSection = () => {
    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate('/schedule-call');
    };

    return (
        <div className="consultation-section">
            <div className="consultation-content">
                <h2>Schedule a free consultation with one of our experts.</h2>
                <p>
                    Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert guidance, and unparalleled support.
                </p>
                <button className="consultation-button" onClick={handleConsultationClick}>
                    Schedule Now
                </button>
            </div>
            <div className="consultation-images">
                <img src="who-we-are.jpg" alt="Team Collaboration" />
                <img src="14.png" alt="Planning Session" />
                <img src="16.png" alt="Discussion with Experts" />
                <img src="who-we-are.jpg" alt="Team Collaboration" />
                <img src="14.png" alt="Planning Session" />
                <img src="16.png" alt="Discussion with Experts" />
                <img src="who-we-are.jpg" alt="Team Collaboration" />
                <img src="14.png" alt="Planning Session" />
                <img src="16.png" alt="Discussion with Experts" />
            </div>
        </div>
    );
};

export default ConsultationSection;
