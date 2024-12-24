import React from 'react';
import Display from './Display';

const ScoreDisplay = ({ score, rows, level }) => {
  return (
    <div>
      <Display text={`Score: ${score}`} />
      <Display text={`Rows: ${rows}`} />
      <Display text={`Level: ${level}`} />
    </div>
  );
};

export default ScoreDisplay;