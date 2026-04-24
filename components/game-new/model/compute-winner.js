import { GAME_SYMBOLS } from "../constants";

export function computeWinner(
  state,
  seqLength,
  fieldSize,
  playersTimeout,
  playersCount,
) {
  let winner = null;
  if (playersTimeout.length === playersCount) {
    return {
      isWinner: true,
      winningSequenceCoordinates: [],
      symbol: playersTimeout[playersTimeout.length - 1],
    };
  }
  function checkWinningCombination(checkResult, i) {
    let result;
    let response = null;
    Object.keys(checkResult).map((condition) => {
      const symbolValues = checkResult[condition].map(
        (position) => state[position],
      );

      result =
        new Set(symbolValues).size === 1 &&
        Object.keys(GAME_SYMBOLS).includes(symbolValues[0]);
      if (result) {
        response = {
          isWinner: result,
          winningSequenceCoordinates: checkResult[condition],
          symbol: state[checkResult[condition][0]],
        };
      }
    });
    return response;
  }
  for (let i = 0; i < state.length; i++) {
    const checkResult = {
      horizontal: [],
      vertical: [],
      leftDown: [],
      rightDown: [],
    };
    for (let j = 0; j < seqLength; j++) {
      const offset = Math.floor(seqLength / 2);
      const x = i % fieldSize;
      const y = Math.floor(i / fieldSize);
      checkResult.vertical.push((j + y - offset) * fieldSize + x);
      if (x >= offset && x <= fieldSize - offset) {
        checkResult.horizontal.push(j - offset + i);
        checkResult.leftDown.push(
          (j + y - offset) * fieldSize + (x + j - offset),
        );
        checkResult.rightDown.push(
          (j + y - offset) * fieldSize + (x - j + offset),
        );
      }
    }
    winner = checkWinningCombination(checkResult, i);

    if (winner?.isWinner) return winner;
  }
  return winner;
}
