import { GAME_SYMBOLS } from "../constants";

/**
 *  алгоритм вычисления координат ячейки равен x + y*кол-во ячеек в строке-столбце
 * @param {*} currentMove
 * @param {*} playersCount
 * @returns
 */

export function initReducerState({ playersCount, fieldSize, seqLength }) {
  return {
    playersCount,
    fieldSize,
    seqLength,
    cells: Array.from({ length: fieldSize * fieldSize }, (_, i) => ""),
    currentMove: GAME_SYMBOLS.ZERO,
    playersTimeout: [],
    winner: null,
  };
}
