import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { getUserLvl } from './userService';

function MainPage({ userId }) {
  const [lvl, setLvl] = useState(null);

  useEffect(() => {
    if (!userId) {
      console.warn('No userId provided to MainPage');
      return;
    }

    async function fetchLvl() {
      const userLvl = await getUserLvl(String(userId));
      setLvl(userLvl);
    }

    fetchLvl();
  }, [userId]);

  return (
    <div className="main-page">
      <div className="main-page-content">
        <h1 className="main-page-title">Training Dashboard</h1>

        <div className="main-page-card">
          <div className="main-page-label">Your Level</div>
          <div className="main-page-stat">{lvl !== null ? lvl : 'Loading...'}</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;