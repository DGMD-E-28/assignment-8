export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkGuess(guess, target) {
  if (guess < target) return 'Too low';
  if (guess > target) return 'Too high';
  return 'Correct';
}
