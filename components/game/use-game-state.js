import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";

const calcNextMove = (currentMove, playersCount) => {
  const keys = Object.keys(GAME_SYMBOLS).slice(0, playersCount);
  const currentMoveIdx = keys.findIndex((key) => key === currentMove);
  const nextMove = keys[currentMoveIdx + 1] ?? keys[0];
  return nextMove;
};

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: Array.from({ length: 19 * 19 }, (_, i) => ""),
    currentMove: GAME_SYMBOLS.ZERO,
  }));

  const nextMove = calcNextMove(currentMove, playersCount);

  const handleCellClick = (idx) => {
    setGameState((currentGameState) => {
      if (currentGameState.cells[idx]) return currentGameState;
      return {
        ...currentGameState,
        currentMove: calcNextMove(currentGameState.currentMove, playersCount),
        cells: currentGameState.cells.map((cell, i) =>
          i === idx ? (cell = currentMove) : cell,
        ),
      };
    });
  };
  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}
