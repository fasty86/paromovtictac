import { GAME_SYMBOLS } from "../constants";

export const calcNextMove = (currentMove, playersCount, timers) => {
  const keys = Object.keys(GAME_SYMBOLS)
    .slice(0, playersCount)
    .filter((player) => timers[player] > 0);
  if (!keys) return currentMove;
  const currentMoveIdx = keys.findIndex((key) => key === currentMove);
  const nextMove = keys[currentMoveIdx + 1] ?? keys[0];
  return nextMove;
};
