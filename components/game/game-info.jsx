import clsx from "clsx";
import { Profile } from "../profile";
import { Divider } from "../divider";
import { Timer } from "../timer";
import { ZeroIcon, CrossIcon } from "./icons";
import { Badge } from "../badge";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarImg from "../profile/avatar.png";
import player2Avatar from "./player_2.png";
import player3Avatar from "./player_3.png";
import player4Avatar from "./player_4.png";
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
export function GameInfo({ className, playersCount }) {
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
