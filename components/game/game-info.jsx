import clsx from "clsx";
import { Profile } from "../profile";
import { Divider } from "../divider";
import { Timer } from "../timer";
import { ZeroIcon, CrossIcon, Crown } from "../game-new/ui/icons";
import { Badge } from "../badge";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarImg from "../profile/avatar.png";
import player2Avatar from "./player_2.png";
import player3Avatar from "./player_3.png";
import player4Avatar from "./player_4.png";
import { useEffect, useState } from "react";
const testPlayerData = [
  {
    infoData: { name: "Tolmachev", rating: 150, avatarSrc: avatarImg },
    timerData: 131,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    infoData: {
      name: "Harimoto Tomokazu",
      rating: 4,
      avatarSrc: player2Avatar,
    },
    timerData: 20,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    infoData: { name: "Hugo Calderano", rating: 7, avatarSrc: player3Avatar },
    timerData: 53,
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    infoData: { name: "Alexis Lebrun", rating: 11, avatarSrc: player4Avatar },
    timerData: 77,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
];
export function GameInfo({
  className,
  playersCount,
  currentMove,
  winner,
  onTimeout,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white  rounded-2xl px-8 py-4 flex  flex-wrap gap-10 shadow-md ",
      )}
    >
      {testPlayerData.slice(0, playersCount).map((player, idx) => {
        return (
          <PlayerInfo
            key={idx}
            className={idx % 2 === 0 ? "" : "flex-row-reverse"}
            data={player.infoData}
            timer={player.timerData}
            symbol={player.symbol}
            isActivePlayer={player.symbol === currentMove && !winner?.isWinner}
            winner={winner}
            onTimeout={onTimeout}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({
  data: { rating = 150, name = "Толмачев", avatarSrc },
  symbol = GAME_SYMBOLS.CROSS,
  className,
  timerInitialValue = 10,
  isActivePlayer,
  winner,
  onTimeout,
}) {
  const [timer, setTimer] = useState(timerInitialValue);
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
        <Profile playerName={name} rating={rating} avatar={avatarSrc} />
      </div>
      <Divider />
      <Timer data={timer} isActive={isActivePlayer} />
    </div>
  );
}
