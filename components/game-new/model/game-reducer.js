import { calcNextMove } from "./calc-next-move";
import { computeWinner } from "./compute-winner";

export const ACTIONS = {
  CELL_CLICK: "cell-click",
  SET_WINNER: "set-winner",
  PLAYER_TIMEOUT: " player-timeout",
  TICK: "timer-tick",
};
export function gameReducer(prevState, action) {
  const nextMove = calcNextMove(
    prevState.currentMove,
    prevState.playersCount,
    prevState.timers,
  );
  switch (action.type) {
    case ACTIONS.CELL_CLICK:
      const { idx, now } = action;
      if (prevState.cells[idx] || prevState.winner) return prevState;

      return {
        ...prevState,
        currentMove: nextMove,
        cells: prevState.cells.map((cell, i) =>
          i === idx ? (cell = prevState.currentMove) : cell,
        ),
        currentMoveStart: now,
        timers: updateTimers(prevState, now),
      };
    case ACTIONS.SET_WINNER:
      const {
        cells,
        seqLength,
        fieldSize,
        playersCount,
        playersTimeout,
        timers,
        currentMove,
      } = prevState;

      const winner = computeWinner(
        cells,
        seqLength,
        fieldSize,
        playersTimeout,
        playersCount,
        timers,
        currentMove,
        nextMove,
      );
      return {
        ...prevState,
        winner: winner,
        currentMoveStart: winner?.isWinner ? null : prevState.currentMoveStart,
      };
    case ACTIONS.PLAYER_TIMEOUT:
      const { playerSymbol } = action;

      return {
        ...prevState,
        playersTimeout: [...prevState.playersTimeout, playerSymbol],
        currentMove: calcNextMove(
          prevState.currentMove,
          prevState.playersCount,
          [...prevState.playersTimeout, playerSymbol],
        ),
      };
    case ACTIONS.TICK: {
      const { now } = action;
      if (isTimeOver(prevState, now)) {
        return prevState;
      }
      return {
        ...prevState,
        currentMoveStart: now,
        timers: updateTimers(prevState, now),
      };
    }
    default:
      return prevState;
  }
}

function updateTimers(prevState, now) {
  const { timers, currentMoveStart, currentMove } = prevState;
  const difference = now - currentMoveStart;
  const timer = timers[currentMove] - difference;
  return {
    ...timers,
    [currentMove]: timer,
  };
}

function isTimeOver(prevState, now) {
  const timer = updateTimers(prevState, now)[prevState.currentMove];
  return timer <= 0;
}
