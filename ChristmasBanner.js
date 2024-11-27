import React from 'react';
import './ChristmasBanner.css';

const ChristmasBanner = () => {
  return (
    <section className="christmas-banner">
      <div className="christmas-content">
        <h1 className="christmas-title">🎄 Celebrate This Christmas with TalkHome! 🎅</h1>
        <p className="christmas-text">
          Enjoy exclusive deals and stay connected with your loved ones this holiday season.
        </p>
        <a href="/offers" className="christmas-button">
          Explore Offers
        </a>
      </div>
    </section>
  );
};

export default ChristmasBanner;
