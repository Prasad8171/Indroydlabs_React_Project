import React, { useState } from "react";

function MobileScreen({ currentQuestion, submitAnswer }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(selectedOption);
  };

  return (
    <div>
      <h1>Quiz Game - Mobile Screen</h1>
      <h3>{currentQuestion.question}</h3>
      <form onSubmit={handleSubmit}>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => setSelectedOption(option)}
              />
              {option}
            </label>
          </div>
        ))}
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default MobileScreen;
