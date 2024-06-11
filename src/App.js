import React, { useState } from 'react';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState(['Jarbas', 'Haroldo', 'Berenice', 'Celeste']);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [winner, setWinner] = useState(null);

  const handleSelectCandidate = (candidate) => {
    if (selectedCandidates.includes(candidate)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== candidate));
    } else {
      setSelectedCandidates([...selectedCandidates, candidate]);
    }
  };

  const handleGenerateWinner = () => {
    if (selectedCandidates.length > 0) {
      const randomWinner = selectedCandidates[Math.floor(Math.random() * selectedCandidates.length)];
      setWinner(randomWinner);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: 'golden' }}>
      <h1>Sorteio de cadeiras</h1>
      <ul>
        {candidates.map((candidate, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={selectedCandidates.includes(candidate)}
              onChange={() => handleSelectCandidate(candidate)}
            />
            <span>{candidate}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleGenerateWinner}>Sortear</button>
      {winner && <p>A pessoa sorteada foi: {winner}</p>}
    </div>
  );
}

export default App;