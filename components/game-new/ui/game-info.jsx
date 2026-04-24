import { ClockIcon, Star, UserIcon } from "./icons";

export function GameInfo({ playersCount, timeMode = 1, isRatingGame }) {
  return (
    <div className="flex gap-3 leading-tight text-gray-400 text-xs">
      {isRatingGame && <Star />}
      <div className="flex gap-1  items-stretch">
        <UserIcon />
        <span>{playersCount}</span>
      </div>
      <div className="flex gap-1">
        <ClockIcon /> <span> {timeMode} минута на ход</span>
      </div>
    </div>
  );
}
