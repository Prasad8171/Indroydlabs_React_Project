import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import MobileScreen from "./components/MobileScreen";
import "./App.css";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
];

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addPlayer = (playerName) => {
    setPlayers([...players, playerName]);
  };

  const submitAnswer = (answer) => {
    const correctAnswer = questionsData[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      alert("Correct answer!");
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert("Incorrect answer! Try again.");
    }
  };

  return (
    <div className="App">
      <MainScreen
        players={players}
        currentQuestion={questionsData[currentQuestion]}
        addPlayer={addPlayer}
      />
      <MobileScreen
        currentQuestion={questionsData[currentQuestion]}
        submitAnswer={submitAnswer}
      />
    </div>
  );
}

export default App;
