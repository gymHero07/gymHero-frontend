import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing">
      <header className="landing-header">
        <h1 className="landing-title">GymHero</h1>
        <div className="landing-actions">
          <button className="landing-button landing-button-primary">
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

