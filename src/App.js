import React, { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [started, setStarted] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      console.warn('Telegram WebApp API is unavailable in this environment');
      return;
    }

    tg.ready();

    const telegramUserId = tg.initDataUnsafe?.user?.id;
    if (telegramUserId) {
      setUserId(String(telegramUserId));
    } else {
      console.warn('User ID not found in Telegram WebApp data');
    }
  }, []);

  if (!started) {
    return <LandingPage onStartTraining={() => setStarted(true)} />;
  }

  return <MainPage userId={userId} />;
}

export default App;
