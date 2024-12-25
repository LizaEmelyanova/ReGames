import "./App.css";
import React, { useState, useRef } from "react";
import Board from "./ui/Board";
import Interface from "./ui/Interface";
import { Sudoku } from "./utils/Sudoku";
import Text from "./ui/Text";

function getGrid() {
  const grid = [];
  for (let i = 0; i < 9; i++) {
    grid[i] = Array(9).fill(0);
  }
  return grid;
}

function copy2DArray(from, to) {
  for (let i = 0; i < from.length; i++) {
    to[i] = [...from[i]];
  }
}

function SudokuGame() {
  const [grid, setGrid] = useState(getGrid);
  const [puzzleStatus, setPuzzleStatus] = useState("Не решено");
  const [score, setScore] = useState(0);
  const [hasScored, setHasScored] = useState(false);
  const [solvedByUser, setSolvedByUser] = useState(true);
  const initialGrid = useRef(getGrid());

  function handleChange(row, col, e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      if (Number(e.target.value) < 10 && initialGrid.current[row][col] === 0) {
        const newGrid = [...grid];
        newGrid[row][col] = Number(e.target.value);
        setGrid(newGrid);
        setSolvedByUser(true);
      }
    }
  }

  function handleInterface(action) {
    let newGrid;
    switch (action) {
      case "create":
        newGrid = handleCreate();
        copy2DArray(newGrid, initialGrid.current);
        setPuzzleStatus("");
        setHasScored(false);
        setSolvedByUser(true);
        setGrid(newGrid);
        break;
      case "solve":
        newGrid = handleSolve();
        setGrid(newGrid);
        setSolvedByUser(false);
        setHasScored(false);
        break;
      case "clear":
        newGrid = getGrid();
        copy2DArray(newGrid, initialGrid.current);
        setGrid(newGrid);
        setPuzzleStatus("");
        setScore(0);
        setHasScored(false);
        setSolvedByUser(true);
        break;
      case "validate":
        const status = handleValidate();
        if (status && !hasScored && solvedByUser) {
          setPuzzleStatus("Решено");
          setScore((prevScore) => prevScore + 100);
          setHasScored(true);
        } else if (hasScored) {
          setPuzzleStatus("Проверено");
        } else {
          setPuzzleStatus("Не решено");
        }
        break;
      default:
        throw new Error("Invalid action");
    }
  }

  function handleCreate() {
    try {
      const sudoku = new Sudoku();
      return sudoku.puzzle;
    } catch (error) {
      console.log(error);
    }
  }

  function handleValidate() {
    try {
      const sudoku = new Sudoku(grid);
      return sudoku.validate();
    } catch (error) {
      console.log(error);
    }
  }

  function handleSolve() {
    try {
      const sudoku = new Sudoku(grid);
      const status = sudoku.isSolvable();
      if (status) {
        setPuzzleStatus("Решено");
        return sudoku.solvedPuzzle;
      } else {
        setPuzzleStatus("Нельзя решить");
        return grid;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Sudoku">
      <Text score={score}/>
      <Board
        puzzle={initialGrid.current}
        grid={grid}
        handleChange={handleChange}
      />
      <Interface handleInterface={handleInterface} status={puzzleStatus} />
    </div>
  );
}

export default SudokuGame;
