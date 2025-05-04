import React from 'react';

function GuessInput({ guess, onGuessChange, onSubmit, disabled }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="number"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => onGuessChange(e.target.value)}
        onKeyDown={handleKeyPress}
        disabled={disabled}
      />
      <button onClick={onSubmit} disabled={disabled || guess === ''}>
        Submit
      </button>
    </div>
  );
}

export default GuessInput;
