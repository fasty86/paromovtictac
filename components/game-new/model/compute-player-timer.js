export function computePlayerTimer({
  playerSymbol,
  currentMove,
  currentMoveStart,
  timers,
}) {
  return {
    timer: timers[playerSymbol],
    timerStartAt: currentMove === playerSymbol ? currentMoveStart : undefined,
  };
}
