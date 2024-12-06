import React from 'react';
import './App.css';

const Board = ({ board, onCellClick, onRightClick }) => {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              onClick={() => onCellClick(rowIndex, colIndex)}
              onContextMenu={(e) => {
                e.preventDefault();
                onRightClick(rowIndex, colIndex);
              }}
            >
              {cell.revealed && cell.mine ? (
                <div className="mine"></div>
              ) : cell.revealed ? (
                cell.count > 0 ? (
                  <span>{cell.count}</span>
                ) : null
              ) : cell.flag ? (
                <div className="flag"></div>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
