// src/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">
                <Link to="/home">
                    <img
                        src={`${process.env.PUBLIC_URL}/nexivoraLogo.png`}
                        alt="Nexivora Logo - Home"
                    />
                </Link>
            </div>

            {/* Hamburger Menu */}
            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                ☰
            </button>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} role="navigation">
                <NavLink to="/home" onClick={() => setMenuOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/ext-services" onClick={() => setMenuOpen(false)}>
                    Services
                </NavLink>
                <NavLink to="/About" onClick={() => setMenuOpen(false)}>
                    About
                </NavLink>
                <NavLink to="/schedule-call" onClick={() => setMenuOpen(false)}>
                    Contact Us
                </NavLink>
            </nav>

            {/* Schedule Call Button */}
            <Link to="/schedule-call">
                <button className="strategy-call-btn">Schedule Strategy Call →</button>
            </Link>
        </header>
    );
};

export default Header;
