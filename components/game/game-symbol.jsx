import { SquareIcon } from "./icons";
import { TriangleIcon } from "./icons";
import { CrossIcon } from "./icons";
import { ZeroIcon } from "./icons";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: CrossIcon,
    [GAME_SYMBOLS.SQUARE]: SquareIcon,
    [GAME_SYMBOLS.ZERO]: ZeroIcon,
    [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
  }[symbol];

  return <Icon className={className} /> ?? <CrossIcon className={className} />;
}
