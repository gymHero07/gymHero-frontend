import React from 'react';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-content">
        <h1 className="main-page-title">Training Dashboard</h1>

        <div className="main-page-card">
          <div className="main-page-label">Today&apos;s Focus</div>
          <div className="main-page-row">
            <span>Upper body strength</span>
            <span className="main-page-stat">5 exercises · ~45 min</span>
          </div>
        </div>

        <div className="main-page-card">
          <div className="main-page-label">Next Up</div>
          <div className="main-page-row">
            <span>Warm-up & mobility</span>
            <span className="main-page-stat">Ready</span>
          </div>
        </div>

        <button className="main-page-button">Start Workout</button>
      </div>
    </div>
  );
}

export default MainPage;


