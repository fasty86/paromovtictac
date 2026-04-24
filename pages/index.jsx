import { Header } from "../components/header";
import { GameInfo, GameTitle, useGameState } from "../components/game";
import { GameField } from "../components/game/game-field";
import { useState } from "react";
import { UiModal } from "../components/uikit/modal";
import { Button } from "../components/uikit/button";
import { Game } from "../components/game-new";

export default function HomePage() {
  // const [playersCount] = useState(4);
  // const {
  //   cells,
  //   currentMove,
  //   handleCellClick,
  //   nextMove,
  //   winner,
  //   playersTimeout,
  //   handleTimeout,
  // } = useGameState(playersCount);

  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto max-w-[632px] ">{children}</main>
    </div>
  );
}

{
  /* <GameTitle playersCount={playersCount} />
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
/> */
}
