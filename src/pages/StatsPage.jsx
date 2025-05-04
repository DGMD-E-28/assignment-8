import React, { useEffect, useState } from 'react';

function StatsPage() {
  const [gamesWon, setGamesWon] = useState(0);
  const [averageGuesses, setAverageGuesses] = useState(0);

  useEffect(() => {
    const wins = parseInt(localStorage.getItem('gamesWon') || '0');
    const totalGuesses = parseInt(localStorage.getItem('totalGuesses') || '0');

    setGamesWon(wins);
    setAverageGuesses(wins > 0 ? (totalGuesses / wins).toFixed(2) : 0);
  }, []);

  return (
    <div>
      <h1>Player Statistics</h1>
      <p>Total Games Won: {gamesWon}</p>
      <p>Average Guesses to Win: {averageGuesses}</p>
      <button onClick={() => {
        localStorage.removeItem('gamesWon');
        localStorage.removeItem('totalGuesses');
        setGamesWon(0);
        setAverageGuesses(0);
      }}>
        Reset Stats
      </button>
    </div>
  );
}

export default StatsPage;
