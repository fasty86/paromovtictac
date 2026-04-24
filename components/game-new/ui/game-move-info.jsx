import { GameSymbol } from "./game-symbol";

export function MoveInfo({ currentMove, nextMove }) {
  return (
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
  );
}
