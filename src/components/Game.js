import React, { useState } from "react";
import StraightIcon from "@mui/icons-material/Straight";
import { calculateDraw, calculateWinner } from "../helpers";
import Board from "./Board";

const Game = ({ sz }) => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(sz * sz).fill(null),
        currentLocation: null,
      },
    ],
    stepNumber: 0,
    xIsNext: true,
    ascending: true,
  });

  const handleClick = (i) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (
      calculateWinner(squares, sz) ||
      calculateDraw(squares, sz) ||
      squares[i]
    ) {
      return;
    }
    squares[i] = state.xIsNext ? "X" : "O";
    setState({
      history: history.concat([
        {
          squares: squares,
          currentLocation: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
      ascending: state.ascending,
    });
  };

  const jumpTo = (step) => {
    setState({
      ...state,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  };

  const handleToggleClick = (ascending) => {
    setState({
      ...state,
      ascending: !ascending,
    });
  };

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares, sz);
  const draw = calculateDraw(current.squares, sz);

  const moves = history.map((step, move) => {
    const col = (step.currentLocation % sz) + 1;
    const row = Math.floor(step.currentLocation / sz) + 1;
    const desc = move
      ? "Go to move #" + move + ": (" + col + "," + row + ")"
      : "Go to game start";
    return (
      <li key={move}>
        <button
          className={`history-button ${
            move === state.stepNumber ? "selected" : ""
          }`}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + current.squares[winner[0]];
  } else if (draw) {
    status = "Draw";
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }
  return (
    <div>
      <div className="game-title">Gomoku</div>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => handleClick(i)}
            winner={winner}
            sz={sz}
          />
        </div>
        <div className="game-info">
          <div className="game-status">
            {status}
            <div
              className="toggle-button-hislist"
              onClick={() => handleToggleClick(state.ascending)}
            >
              <StraightIcon
                className={`arrow ${state.ascending ? "" : "down"}`}
              ></StraightIcon>
            </div>
          </div>
          <ol className="history-list">
            {state.ascending ? moves : moves.slice(0).reverse()}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
