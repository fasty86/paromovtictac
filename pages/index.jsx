import { Header } from "../components/header";
import { GameInfo, GameTitle, useGameState } from "../components/game";
import { GameField } from "../components/game/game-field";
import { useState } from "react";
import { UiModal } from "../components/uikit/modal";
import { Button } from "../components/uikit/button";

export default function HomePage() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winner,
    playersTimeout,
    handleTimeout,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[632px] ">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          winner={winner}
          onTimeout={handleTimeout}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          winner={winner}
        />
      </main>
      <UiModal>
        <UiModal.Header className="text-2xl">Игра завершена</UiModal.Header>
        <UiModal.Body>
          <div>
            <span className="text-sm">Победитель:</span>{" "}
            <span className="text-teal-600">Sailenthobo</span>
          </div>
        </UiModal.Body>
        <UiModal.Footer>
          <Button size="md" type="outlined">
            Вернуться
          </Button>
          <Button className="">Играть снова</Button>
        </UiModal.Footer>
      </UiModal>
    </div>
  );
}
