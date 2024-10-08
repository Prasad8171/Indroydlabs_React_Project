import React from "react";
import Question from "./Question";

function MainScreen({ players, currentQuestion, addPlayer }) {
  const handleAddPlayer = (e) => {
    e.preventDefault();
    const playerName = e.target.elements.playerName.value;
    if (playerName) {
      addPlayer(playerName);
    }
  };

  // Use the goqr.me API to generate the QR code
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    "http://localhost:3000/mobile"
  )}`;

  return (
    <div>
      <h1>Quiz Game - Main Screen</h1>
      {/* Render the QR code as an image */}
      <img src={qrCodeUrl} alt="QR Code" />
      <h3>Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <form onSubmit={handleAddPlayer}>
        <input type="text" name="playerName" placeholder="Enter player name" />
        <button type="submit">Add Player</button>
      </form>
      <h3>Current Question:</h3>
      <Question question={currentQuestion.question} options={currentQuestion.options} />
    </div>
  );
}

export default MainScreen;
