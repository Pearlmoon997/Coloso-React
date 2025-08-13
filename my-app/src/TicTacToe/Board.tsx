/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Square, SquareValue } from "./Square";

const calculateWiunner = (board: SquareValue[]) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const winnerline of winnerLines) {
    const [a, b, c] = winnerline;
    if (
      board[a] === board[b] && // 3개가 전부 같은지 체크
      board[c] === board[a] &&
      board[c] === board[b] &&
      board[a] !== "-"
    ) {
      return board[a];
    }
  }
  return "-";
};
export function Board() {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill("-"));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState<SquareValue>("-");
  const squareClick = (index: number) => {
    if (board[index] !== "-") return;
    if (winner !== "-") return;

    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    const calculatedWinner = calculateWiunner(newBoard);
    if (calculatedWinner != "-") {
      console.log("Winner is", calculatedWinner);
      setWinner(calculatedWinner);
    }
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  return (
    <div>
      {winner === "-" ? (
        <h2> Next Player : {xTurn ? "X" : "O"}</h2>
      ) : (
        <h2> WINNER : {winner}</h2>
      )}

      <div role="group">
        {[0, 1, 2].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>
      <div role="group">
        {[3, 4, 5].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>
      <div role="group">
        {[6, 7, 8].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>
    </div>
  );
}
