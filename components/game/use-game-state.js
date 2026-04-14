import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";

const calcNextMove = (currentMove) => {
  const keys = Object.keys(GAME_SYMBOLS);
  const currentMoveIdx = keys.findIndex((key) => key === currentMove);
  return currentMoveIdx < 3 ? keys[currentMoveIdx + 1] : keys[0];
};

export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: Array.from({ length: 19 * 19 }, (_, i) => ""),
    currentMove: GAME_SYMBOLS.ZERO,
  }));

  const nextMove = calcNextMove(currentMove);

  const handleCellClick = (idx) => {
    setGameState((currentGameState) => {
      if (currentGameState.cells[idx]) return currentGameState;
      return {
        ...currentGameState,
        currentMove: calcNextMove(currentGameState.currentMove),
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
