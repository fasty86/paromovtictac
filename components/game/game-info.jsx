import clsx from "clsx";
import { Profile } from "../profile";
import { Divider } from "../divider";
import { Timer } from "../timer";
import { ZeroIcon, CrossIcon } from "./icons";
import { Badge } from "../badge";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarImg from "../profile/avatar.png";

const testPlayerData = [
  {
    infoData: { name: "Tolmachev", rating: 150, avatarSrc: avatarImg },
    timerData: 131,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    infoData: { name: "Harimoto Tomokazu", rating: 4, avatarSrc: avatarImg },
    timerData: 20,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    infoData: { name: "Hugo Calderano", rating: 7, avatarSrc: avatarImg },
    timerData: 53,
    symbol: GAME_SYMBOLS.SQUARE,
  },
  {
    infoData: { name: "Alexis Lebrun", rating: 11, avatarSrc: avatarImg },
    timerData: 77,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
];
export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white  rounded-2xl px-8 py-4 flex  flex-wrap gap-10 shadow-md ",
      )}
    >
      {testPlayerData.map((player, idx) => {
        return (
          <PlayerInfo
            key={idx}
            className={idx % 2 === 0 ? "" : "flex-row-reverse"}
            data={player.infoData}
            timer={player.timerData}
            symbol={player.symbol}
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
  timer,
}) {
  return (
    <div className={clsx("flex items-baseline  w-[264px]", className)}>
      <div className="relative">
        <Badge className="text-red-600">
          <GameSymbol symbol={symbol} />
        </Badge>
        <Profile playerName={name} rating={rating} avatar={avatarSrc} />
      </div>
      <Divider />
      <Timer data={timer} />
    </div>
  );
}
