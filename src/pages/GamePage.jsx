import React, { useState, useEffect } from 'react';
import GuessInput from '../components/GuessInput';
import FeedbackMessage from '../components/FeedbackMessage';
import NewGameButton from '../components/NewGameButton';
import { generateRandomNumber } from '../utils/gameLogic';

const DEFAULT_MIN = 1;
const DEFAULT_MAX = 100;
const DEFAULT_GUESSES = 5;

function GamePage() {
  const [min, setMin] = useState(DEFAULT_MIN);
  const [max, setMax] = useState(DEFAULT_MAX);
  const [maxGuesses, setMaxGuesses] = useState(DEFAULT_GUESSES);

  const [target, setTarget] = useState(generateRandomNumber(min, max));
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(maxGuesses);
  const [gameOver, setGameOver] = useState(false);
  const [showNewGame, setShowNewGame] = useState(false);

  useEffect(() => {
    setTarget(generateRandomNumber(min, max));
    setGuessesLeft(maxGuesses);
    setFeedback('');
    setGameOver(false);
    setShowNewGame(false);
    setGuess('');
  }, [min, max, maxGuesses]);

  const handleGuess = () => {
    if (gameOver || guess === '') return;
    const numGuess = parseInt(guess, 10);

    if (numGuess === target) {
      setFeedback('🎉 Congratulations! You guessed it!');
      updateStats(maxGuesses - guessesLeft + 1);
      endGame();
    } else {
      const hint = numGuess < target ? 'Too low' : 'Too high';
      setFeedback(hint);
      if (guessesLeft - 1 === 0) {
        setFeedback(`💥 Game over. The number was ${target}`);
        endGame();
      } else {
        setGuessesLeft(prev => prev - 1);
      }
    }
    setGuess('');
  };

  const updateStats = (numGuesses) => {
    const wins = parseInt(localStorage.getItem('gamesWon') || '0');
    const totalGuesses = parseInt(localStorage.getItem('totalGuesses') || '0');

    localStorage.setItem('gamesWon', wins + 1);
    localStorage.setItem('totalGuesses', totalGuesses + numGuesses);
  };

  const endGame = () => {
    setGameOver(true);
    setShowNewGame(true);
  };

  const startNewGame = () => {
    setTarget(generateRandomNumber(min, max));
    setGuessesLeft(maxGuesses);
    setFeedback('');
    setGameOver(false);
    setShowNewGame(false);
    setGuess('');
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p>Guess a number between {min} and {max}. You have {guessesLeft} guess{guessesLeft !== 1 ? 'es' : ''} left.</p>
      <GuessInput
        guess={guess}
        onGuessChange={setGuess}
        onSubmit={handleGuess}
        disabled={gameOver}
      />
      <div>
        <FeedbackMessage message={feedback} />
      </div>
      {showNewGame && <NewGameButton onClick={startNewGame} />}
    </div>
  );
}

export default GamePage;
