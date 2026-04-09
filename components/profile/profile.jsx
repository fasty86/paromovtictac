import Image from "next/image";
import avatar from "./avatar.png";
export function Profile({ playerName, rating }) {
  return (
    <div className="flex gap-2 items-end w-44">
      <Image src={avatar} alt="avatar" />
      <div className="flex flex-col justify-start items-start">
        <div className=" text-lg leading-tight max-w-24 text-teal-600 truncate">
          {playerName}
        </div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг : {rating}
        </div>
      </div>
    </div>
  );
}
