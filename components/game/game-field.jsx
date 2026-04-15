import clsx from "clsx";

import { Button } from "../uikit/button";

import { GameCell } from "../cell";

import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className, playersCount }) {
  const { cells, currentMove, handleCellClick, nextMove } =
    useGameState(playersCount);

  return (
    <GameFieldLayout className={className}>
      <GameFieldInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid gameState={cells} onClick={handleCellClick} />
    </GameFieldLayout>
  );
}

const actions = (
  <>
    <Button text="Ничья" />
    <Button text="Сдаться" type="outlined" />
  </>
);

function GameGrid({ gameState, onClick }) {
  return (
    <div className="grid grid-cols-[repeat(19,30px)] grid-rows-[repeat(19, 30px)]  mt-3">
      {gameState.map((value, idx) => (
        <GameCell key={idx} onClick={() => onClick(idx)} symbol={value} />
      ))}
    </div>
  );
}
function GameFieldLayout({ className, children }) {
  return (
    <div
      className={clsx(className, "h-[651px] bg-white rounded-2xl px-8 py-6")}
    >
      {children}
    </div>
  );
}

function GameFieldInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col w-42">
        <div className="flex items-center justify-start gap-2  text-teal-600">
          <span className="text-xl font-semibold text-black">Ход:</span>{" "}
          <GameSymbol symbol={currentMove} className="w-3 h-3" />
        </div>
        <div className="flex items-center justify-start gap-2 ">
          <span className="text-slate-400 text-xs">Следующий :</span>{" "}
          <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      <div className="flex gap-2 items-end">{actions}</div>
    </div>
  );
}
