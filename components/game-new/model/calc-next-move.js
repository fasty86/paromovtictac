import { GAME_SYMBOLS } from "../constants";

export const calcNextMove = (currentMove, playersCount, playersTimeout) => {
  const keys = Object.keys(GAME_SYMBOLS)
    .slice(0, playersCount)
    .filter((player) => !playersTimeout.includes(player));
  const currentMoveIdx = keys.findIndex((key) => key === currentMove);
  const nextMove = keys[currentMoveIdx + 1] ?? keys[0];
  return nextMove || playersTimeout[playersTimeout.length - 1];
};
