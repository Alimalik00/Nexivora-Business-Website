import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-column">
                <img src="nexivoraLogo.png" alt="Clutch Logo" className="clutch-logo" />
                    
                    <address>
                        18 S 2nd St STE 120,<br />
                        San Jose, CA, 95113<br />
                        United States<br />
                        <a href="mailto:sales@nexivora.com">sales@nexivora.com</a>
                    </address>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Referrals</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Industries We Serve</h3>
                    <ul>
                        <li><a href="#">Healthcare & Pharmaceutics</a></li>
                        <li><a href="#">Banking & FinTech</a></li>
                        <li><a href="#">E-commerce</a></li>
                        <li><a href="#">Hospitality</a></li>
                        <li><a href="#">Software as a Service (SaaS)</a></li>
                        <li><a href="#">Gaming</a></li>
                        <li><a href="#">Public Sector</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Services & Solutions</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile App Development</a></li>
                        <li><a href="#">Generative AI</a></li>
                        <li><a href="#">DevOps</a></li>
                        <li><a href="#">QA Testing</a></li>
                        <li><a href="#">Custom Development</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Learning</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
                <div className="subscribe">
                    <h3>Subscribe</h3>
                    <p>Stay updated with the latest in tech.</p>
                    <form action="#">
                        <input type="email" placeholder="Email*" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="footer-legal">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
