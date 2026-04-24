import Image from "next/image";
import { Divider } from "../../divider";
import { Timer } from "../../timer";
import { Badge } from "./badge/badge";
import { GameSymbol } from "./game-symbol";
import { Crown } from "./icons";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function PlayerInfo({
  data: { rating = 150, name = "Толмачев", avatarSrc },
  symbol = GAME_SYMBOLS.CROSS,
  timer: seconds = 10,
  isActivePlayer,
  winner,
  onTimeout,
  className,
}) {
  const [timer, setTimer] = useState(seconds);
  useEffect(() => {
    let timerId = null;

    if (isActivePlayer) {
      timerId = setInterval(() => {
        setTimer((currentTimer) => {
          if (currentTimer === 0) {
            clearInterval(timerId);
          }
          return currentTimer > 0 ? currentTimer - 1 : currentTimer;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isActivePlayer]);
  useEffect(() => {
    if (timer === 0 && isActivePlayer) {
      onTimeout(symbol);
    }
  }, [timer, isActivePlayer, symbol]);

  return (
    <div
      className={clsx(
        "flex items-baseline  w-[264px]",
        className,
        winner?.isWinner && winner?.symbol === symbol ? " animate-pulse " : "",
      )}
    >
      <div className="relative">
        {winner?.symbol === symbol && (
          <Crown className="w-4 h-4 absolute left-16 -top-2" />
        )}
        <Badge className="text-red-600">
          <GameSymbol symbol={symbol} />
        </Badge>
        <div className="flex gap-2 items-end w-44">
          <Image src={avatarSrc} alt="avatar" className="w-12 h-12" />
          <div className="flex flex-col justify-start items-start">
            <div className=" text-lg leading-tight max-w-24 text-teal-600 truncate">
              {name}
            </div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг : {rating}
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <Timer data={timer} isActive={isActivePlayer} />
    </div>
  );
}
