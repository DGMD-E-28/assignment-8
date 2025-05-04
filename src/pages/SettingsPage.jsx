import React, { useState, useEffect } from 'react';

function SettingsPage() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [maxGuesses, setMaxGuesses] = useState(5);

  useEffect(() => {
    const savedMin = parseInt(localStorage.getItem('min') || '1');
    const savedMax = parseInt(localStorage.getItem('max') || '100');
    const savedGuesses = parseInt(localStorage.getItem('maxGuesses') || '5');
    setMin(savedMin);
    setMax(max => savedMax);
    setMaxGuesses(savedGuesses);
  }, []);

  const handleSave = () => {
    localStorage.setItem('min', min);
    localStorage.setItem('max', max);
    localStorage.setItem('maxGuesses', maxGuesses);
    alert('Settings saved!');
  };

  return (
    <div>
      <h1>Game Settings</h1>
      <label>
        Minimum Number:
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Maximum Number:
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Max Guesses:
        <input
          type="number"
          value={maxGuesses}
          onChange={(e) => setMaxGuesses(parseInt(e.target.value))}
        />
      </label>
      <br />
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}

export default SettingsPage;
