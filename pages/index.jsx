import { Header } from "../components/header";
import { GameInfo, GameTitle } from "../components/game";
import { GameField } from "../components/game/game-field";
import { useState } from "react";
export default function HomePage() {
  const [playersCount] = useState(2);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[632px] ">
        <GameTitle playersCount={playersCount} />
        <GameInfo className="mt-4" playersCount={playersCount} />
        <GameField className="mt-6" playersCount={playersCount} />
      </main>
    </div>
  );
}
