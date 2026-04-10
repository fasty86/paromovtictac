import clsx from "clsx";
import { SquareIcon, ZeroIcon } from "./icons";
import { Button } from "../uikit/button";
import { useState } from "react";
import { GameCell } from "../cell";
export function GameField({ className }) {
  const [gameState, setGameState] = useState(() =>
    Array.from({ length: 19 * 19 }, (_, i) => i),
  );
  return (
    <div
      className={clsx(className, "h-[651px] bg-white rounded-2xl px-8 py-6")}
    >
      <div className="flex justify-between ">
        <div className="flex flex-col w-42">
          <div className="flex items-center justify-start gap-2  text-teal-600">
            <span className="text-xl font-semibold text-black">Ход:</span>{" "}
            <ZeroIcon />
          </div>
          <div className="flex items-center justify-start gap-2 ">
            <span className="text-slate-400 text-xs">Следующий :</span>{" "}
            <SquareIcon />
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <Button text={"Ничья"} />
          <Button type="outlined" text={"Сдаться"} />
        </div>
      </div>
      <div className="flex flex-wrap mt-3">
        {gameState.map((cell, idx) => (
          <GameCell key={idx} symbol={cell} />
        ))}
      </div>
    </div>
  );
}
