import React from 'react';
import './LandingPage.css';

function LandingPage({ onStartTraining }) {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1 className="landing-title">GymHero</h1>
        <div className="landing-actions">
          <button
            className="landing-button landing-button-primary"
            onClick={onStartTraining}
          >
            Start Training
          </button>
          <button className="landing-button landing-button-secondary">
            Settings
          </button>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;

