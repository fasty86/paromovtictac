import clsx from "clsx";
import { GameSymbol } from "../game/game-symbol";

export function GameCell({ className, symbol, onClick }) {
  return (
    <button
      className={clsx(
        "w-[30px] h-[30px] border-[0.5px] border-slate-200 flex items-center justify-center ",
        className,
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol className="w-3 h-3" symbol={symbol} />}
    </button>
  );
}
