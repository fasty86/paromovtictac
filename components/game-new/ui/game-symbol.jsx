import { GAME_SYMBOLS } from "../../game-new/constants";
import { CrossIcon, SquareIcon, ZeroIcon, TriangleIcon } from "./icons";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: CrossIcon,
    [GAME_SYMBOLS.SQUARE]: SquareIcon,
    [GAME_SYMBOLS.ZERO]: ZeroIcon,
    [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
  }[symbol];

  return <Icon className={className} /> ?? <CrossIcon className={className} />;
}
