import Link from "next/link";
import { Arrow, ClockIcon, Star, UserIcon } from "../game-new/ui/icons";

export function GameTitle({ playersCount }) {
  return (
    <div className="max-w-[304px]  flex flex-col items-start gap-2 ml-2">
      <Link href="#" className="flex gap-2 text-teal-600 text-xs leading-tight">
        <Arrow />
        <div>На главную</div>
      </Link>
      <h1 className="text-black text-4xl first-letter:capitalize">
        крестики нолики
      </h1>
      <div className="flex gap-3 leading-tight text-gray-400 text-xs">
        <Star />

        <div className="flex gap-1  items-stretch">
          <UserIcon />
          <span>{playersCount}</span>
        </div>
        <div className="flex gap-1">
          <ClockIcon /> <span> 1 минута на ход</span>
        </div>
      </div>
    </div>
  );
}
