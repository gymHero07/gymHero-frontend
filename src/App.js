// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [telegramUser, setTelegramUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) tg.ready();

    const user = tg?.initDataUnsafe?.user;
    if (user) {
      console.log("Telegram ID:", user.id);
      console.log("Username:", user.username);
      console.log("First name:", user.first_name);
      setTelegramUser(user); // сохраняем пользователя
    }
  }, []);

  const handleStartTraining = () => {
    setCurrentPage('main');
  };

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage onStartTraining={handleStartTraining} />
      ) : (
        <MainPage telegramUser={telegramUser} />
      )}
    </div>
  );
}

export default App;