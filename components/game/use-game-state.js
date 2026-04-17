import { useEffect, useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { calcNextMove, computeWinner } from "./model";

/**
 *  алгоритм вычисления координат ячейки равен x + y*кол-во ячеек в строке-столбце
 * @param {*} currentMove
 * @param {*} playersCount
 * @returns
 */
export function useGameState(playersCount, seqLength = 5, fieldSize = 19) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: Array.from({ length: 19 * 19 }, (_, i) => ""),
    currentMove: GAME_SYMBOLS.ZERO,
  }));
  const [winner, setWinner] = useState(null);

  const nextMove = calcNextMove(currentMove, playersCount);

  const handleCellClick = (idx) => {
    setGameState((currentGameState) => {
      if (currentGameState.cells[idx] || winner) return currentGameState;
      return {
        ...currentGameState,
        currentMove: calcNextMove(currentGameState.currentMove, playersCount),
        cells: currentGameState.cells.map((cell, i) =>
          i === idx ? (cell = currentMove) : cell,
        ),
      };
    });
  };
  useEffect(() => {
    setWinner(computeWinner(cells, seqLength, fieldSize));
  }, [cells, seqLength, fieldSize]);
  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winner,
  };
}
