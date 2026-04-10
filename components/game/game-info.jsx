import clsx from "clsx";
import { Profile } from "../profile";
import { Divider } from "../divider";
import { Timer } from "../timer";
import { ZeroIcon, CrossIcon } from "./icons";
import { Badge } from "../badge";
export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white h-20 rounded-2xl px-8 py-4 flex  gap-10 shadow-md ",
      )}
    >
      <div className="flex items-baseline  w-[284px]">
        <div className="relative">
          <Badge className="text-red-600">
            <CrossIcon />
          </Badge>
          <Profile playerName="Толмачев" rating={150} />
        </div>
        <Divider />
        <Timer className="text-slate-900 text-xl self-end" data="01:20" />
      </div>
      <div className="flex items-baseline w-[284px]">
        <Timer className="text-red-600 text-xl self-end" data="00:20" />
        <Divider />
        <div className="relative">
          <Badge className="text-teal-600">
            <ZeroIcon />
          </Badge>
          <Profile playerName="Tomakazu harimotosssssssssssss" rating={4} />
        </div>
      </div>
    </div>
  );
}
