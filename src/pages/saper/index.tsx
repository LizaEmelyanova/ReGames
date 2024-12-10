import { useState } from 'react'
import './App.css'
import {
  ContainerPage,
  Flex,
  GameOverModal,
  Score
} from 'shared/ui'

interface Cell {
  isMine: boolean;
  isOpen: boolean;
  isFlagged: boolean;
  adjacentMines: number;
}

interface BoardProps {
  board: Cell[][];
  onCellClick: (row: number, col: number) => void;
  onRightClick: (e: React.MouseEvent<HTMLDivElement>, row: number, col: number) => void;
}

interface CellProps {
  cell: Cell;
  onClick: () => void;
  onRightClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Saper = () => {
  const [board, setBoard] = useState<Cell[][]>(generateBoard(10, 10, 16));
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);

  const handleCellClick = (row: number, col: number) => {
    if (gameOver || gameWon) return;

    const cell = board[row][col];

    if (cell.isOpen) return;

    if (cell.isMine) {
      revealBoard(board);
      setGameOver(true);
    } else {
      const newBoard = [...board];
      openCell(newBoard, row, col);
      setBoard(newBoard);
      setScore(score + 1);

      if (checkWin(newBoard)) {
        setGameWon(true);
      }
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>, row: number, col: number) => {
    e.preventDefault();
    const newBoard = [...board];
    newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged;
    setBoard(newBoard);
  };

  return (
    <ContainerPage logo={false}>
      <Flex
        h='100%'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
      >
        <Score score={score} />
        <Board board={board} onCellClick={handleCellClick} onRightClick={handleRightClick} />
        {(gameOver || gameWon) && (
          <GameOverModal 
            message={gameWon ? "Победа!" : "Игра окончена"}
            score={score}
            onRestart={resetGame}
          />
        )}
      </Flex>
    </ContainerPage>
  );

  function resetGame() {
    setBoard(generateBoard(10, 10, 16));
    setScore(0);
    setGameOver(false);
    setGameWon(false);
  }
}

function Board({ board, onCellClick, onRightClick }: BoardProps) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`} // Исправлено на шаблонные строки
            cell={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            onRightClick={(e) => onRightClick(e, rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
}

function Cell({ cell, onClick, onRightClick }: CellProps) {
  let cellContent;
  let cellClass = "cell";

  if (cell.isOpen) {
    cellClass += " open";
    cellContent = cell.isMine ? <div className="mine" /> : <span>{cell.adjacentMines || ""}</span>;
  }

  if (cell.isFlagged) {
    cellContent = (
      <svg width="30" height="22" viewBox="0 0 100 100" style={{ transform: 'rotate(90deg)' }}>
        <polygon points="50,0 100,100 0,100" 
                 fill="rgb(67, 45, 152)"
                 stroke="black"
                 strokeWidth="7"
        />
      </svg>
    );
    cellClass += " isFlagged";
  }

  return (
    <div className={cellClass} onClick={onClick} onContextMenu={onRightClick}>
      {cellContent}
    </div>
  );
}

function generateBoard(rows: number, cols: number, mines: number): Cell[][] {
  const board = Array.from({ length: rows }, () =>
    Array(cols).fill(null).map(() => ({
      isMine: false,
      isOpen: false,
      isFlagged: false,
      adjacentMines: 0,
    }))
  );

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

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!board[row][col].isMine) {
        board[row][col].adjacentMines = countAdjacentMines(board, row, col);
      }
    }
  }

  return board;
}

function countAdjacentMines(board: Cell[][], row: number, col: number): number {
  const directions: [number, number][] = [
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

function openCell(board: Cell[][], row: number, col: number): void {
  if (board[row][col].isOpen || board[row][col].isFlagged) return;

  board[row][col].isOpen = true;

  if (board[row][col].adjacentMines === 0) {
    const directions: [number, number][] = [
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

function revealBoard(board: Cell[][]): void {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col].isMine) {
        board[row][col].isOpen = true;
      }
    }
  }
}

function checkWin(board: Cell[][]): boolean {
  const totalCells = board.length * board[0].length;
  const totalMines = board.flat().filter(cell => cell.isMine).length;
  const flaggedMines = board.flat().filter(cell => cell.isFlagged && cell.isMine).length;
  const openedSafeCells = board.flat().filter(cell => cell.isOpen && !cell.isMine).length;

  return flaggedMines === totalMines && (openedSafeCells === totalCells - totalMines);
}

export default Saper