import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, winner, sz }) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        className={winner && winner.includes(i) ? "win" : ""}
      />
    );
  };

  return (
    <div className="game-matrix">
      {Array(sz * sz)
        .fill(null)
        .map((item, index) => (
          <div className="game-square" key={index}>
            {renderSquare(index)}
          </div>
        ))}
    </div>
  );
};

export default Board;
