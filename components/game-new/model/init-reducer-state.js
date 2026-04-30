import { GAME_SYMBOLS } from "../constants";

/**
 *  алгоритм вычисления координат ячейки равен x + y*кол-во ячеек в строке-столбце
 * @param {*} currentMove
 * @param {*} playersCount
 * @returns
 */

export function initReducerState({
  playersCount,
  fieldSize,
  seqLength,
  baseTimer,
  currentMoveStart,
}) {
  return {
    playersCount,
    fieldSize,
    seqLength,
    cells: Array.from({ length: fieldSize * fieldSize }, (_, i) => ""),
    currentMove: GAME_SYMBOLS.ZERO,
    currentMoveStart,
    playersTimeout: [],
    winner: null,
    timers: Object.keys(GAME_SYMBOLS)
      .slice(0, playersCount)
      .reduce((reducer, symbol) => {
        reducer[symbol] = baseTimer * 1000;
        return reducer;
      }, {}),
  };
}
