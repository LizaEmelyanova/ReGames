import React, { useState } from 'react';
import './App.css';
import GameOverMessage from './GameOverMessage';


function App() {
  const [board, setBoard] = useState(generateBoard(10, 10, 16));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleCellClick = (row, col) => {
  if (gameOver || gameWon) return; // Прекращаем действия, если игра закончена

  const cell = board[row][col];
  
  if (cell.isOpen) return; // Если клетка уже открыта, ничего не делаем

  if (cell.isMine) {
    revealBoard(board); // Открываем только клетки с бомбами
    setGameOver(true);
  } else {
    const newBoard = [...board];
    openCell(newBoard, row, col);
    setBoard(newBoard);
    setScore(score + 1); // Начисляем очки только за первую попытку открыть эту клетку

    if (checkWin(newBoard)) {
      setGameWon(true);
    }
  }
};


  const handleRightClick = (e, row, col) => {
    e.preventDefault(); // Предотвращаем стандартное контекстное меню
    const newBoard = [...board];
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged; // Переключаем флажок
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1 className="score-title">
        Баллы <span className="score-bold">{score}</span> {/* Число баллов выделено жирным */}
      </h1>
      <Board board={board} onCellClick={handleCellClick} onRightClick={handleRightClick} />
      {(gameOver || gameWon) && (
        <GameOverMessage 
        message={gameWon ? "Победа!" : "Игра окончена"}
        score={score}
        onRestart={resetGame}
        />
      )}
    </div>
  );     

  function resetGame() {
    setBoard(generateBoard(10, 10, 16));
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  }
}

function Board({ board, onCellClick, onRightClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            onRightClick={(e) => onRightClick(e, rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

function Cell({ cell, onClick, onRightClick }) {
  let cellContent = "";
  let cellClass = "cell";

  if (cell.isOpen) {
    cellClass += " open";
    cellContent = cell.isMine ? <div className="mine" /> : <span>{cell.adjacentMines || ""}</span>; // Для бомбы
  }

  if (cell.isFlagged) {  // Фиолетовый треугольник
    cellContent = (
      <svg width="30" height="22" viewBox="0 0 100 100" style={{ transform: 'rotate(90deg)' }}>
        <polygon points="50,0 100,100 0,100" 
                 fill="rgb(67, 45, 152)"
                 stroke="black"       // Цвет обводки
                 strokeWidth="7"      // Толщина обводки
        />
      </svg>
    );
    cellClass += " isFlagged"; // Добавляем класс для стилизации
  }

  return (
    <div className={cellClass} onClick={onClick} onContextMenu={onRightClick}>
      {cellContent}
    </div>
  );
}

function generateBoard(rows, cols, mines) {
  const board = Array.from({ length: rows }, () =>
    Array(cols).fill(null).map(() => ({
      isMine: false,
      isOpen: false,
      isFlagged: false,
      adjacentMines: 0,
    }))
  );

  // Установка мин
  for (let i = 0; i < mines; i++) {
    let placed = false;
    while (!placed) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!board[row][col].isMine) {
        board[row][col].isMine = true;
        placed = true;
      }
    }
  }

  // Подсчет мин вокруг каждой клетки
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!board[row][col].isMine) {
        board[row][col].adjacentMines = countAdjacentMines(board, row, col);
      }
    }
  }

  return board;
}

function countAdjacentMines(board, row, col) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];
  let count = 0;

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
      if (board[newRow][newCol].isMine) {
        count++;
      }
    }
  }
  return count;
}

function openCell(board, row, col) {
  if (board[row][col].isOpen || board[row][col].isFlagged) return;

  board[row][col].isOpen = true;

  if (board[row][col].adjacentMines === 0) {
    // Если рядом нет мин, открываем соседние клетки
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],          [0, 1],
      [1, -1], [1, 0], [1, 1],
    ];

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
        openCell(board, newRow, newCol);
      }
    }
  }
}

function revealBoard(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // Открываем только клетки с бомбами
      if (board[row][col].isMine) {
        board[row][col].isOpen = true;
      }
    }
  }
}

function checkWin(board) {
  // Проверяем, расставлены ли все флажки правильно и открыты ли все клетки без бомб
  const totalCells = board.length * board[0].length;
  const totalMines = board.flat().filter(cell => cell.isMine).length;
  const flaggedMines = board.flat().filter(cell => cell.isFlagged && cell.isMine).length;
  const openedSafeCells = board.flat().filter(cell => cell.isOpen && !cell.isMine).length;

  return flaggedMines === totalMines && (openedSafeCells === totalCells - totalMines);
}

export default App;
