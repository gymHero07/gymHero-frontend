import './App.css';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleStartTraining = () => {
    setCurrentPage('main');
  };

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage onStartTraining={handleStartTraining} />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
