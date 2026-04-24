import { calcNextMove } from "./calc-next-move";
import { computeWinner } from "./compute-winner";

export const ACTIONS = {
  CELL_CLICK: "cell-click",
  SET_WINNER: "set-winner",
  PLAYER_TIMEOUT: " player-timeout",
};
export function gameReducer(prevState, action) {
  switch (action.type) {
    case ACTIONS.CELL_CLICK:
      const { idx } = action;
      if (prevState.cells[idx] || prevState.winner) return prevState;
      return {
        ...prevState,
        currentMove: calcNextMove(
          prevState.currentMove,
          prevState.playersCount,
          prevState.playersTimeout,
        ),
        cells: prevState.cells.map((cell, i) =>
          i === idx ? (cell = prevState.currentMove) : cell,
        ),
      };
    case ACTIONS.SET_WINNER:
      const { cells, seqLength, fieldSize, playersCount, playersTimeout } =
        prevState;
      return {
        ...prevState,
        winner: computeWinner(
          cells,
          seqLength,
          fieldSize,
          playersTimeout,
          playersCount,
        ),
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
    default:
      return prevState;
  }
}
