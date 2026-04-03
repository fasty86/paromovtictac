import { GameCell } from './game-cell';
import { GameInfo } from './game-info';
import ResetButton from './reset-button';
import { useGameState } from './use-game-state';

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="font-sans flex flex-col items-center w-52 p-3 px-7 mx-auto my-28 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-[repeat(3,30px)] grid-rows-[repeat(3,30px)] pt-1">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton handler={resetGame} />
    </div>
  );
}
