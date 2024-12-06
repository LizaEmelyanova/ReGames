import React from 'react';
import './App.css';

function GameOverMessage({ message, score, onRestart }) {
  return (
    <div className="game-over-message">
      <p>{message}</p>
      <h1 className="score-message">
        Вы набрали {score} баллов
      </h1>
      <button onClick={onRestart}>ИГРАТЬ</button>
    </div>
  );
}

export default GameOverMessage;
