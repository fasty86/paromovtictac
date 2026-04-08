import Image from "next/image";
import avatar from "./avatar.png";
export function Profile() {
  return (
    <div>
      <Image src={avatar} alt="avatar" />
      <div className="flex flex-col justify-start items-start">
        <div className=" text-lg leading-tight">Tolmachev</div>
        <div className="text-slate-400 text-xs leading-tight">Рейтинг 150</div>
      </div>
    </div>
  );
}
