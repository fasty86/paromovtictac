import { Header } from "../components/header";
import { GameInfo, GameTitle, useGameState } from "../components/game";
import { GameField } from "../components/game/game-field";
import { useState } from "react";
export default function HomePage() {
  const [playersCount] = useState(4);
  const { cells, currentMove, handleCellClick, nextMove } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[632px] ">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
        />
      </main>
    </div>
  );
}
