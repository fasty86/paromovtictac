import Image from "next/image";
import logo from "./logo.svg";
import { ArrowDownIcon } from "./icons";
import { Profile } from "../profile";
export function Header() {
  return (
    <header className="h-24 bg-white px-8 flex items-center shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <button className="w-44 py-2 px-5 text-white bg-teal-600 hover:bg-teal-500 transition-colors rounded-lg text-2xl leading-tight">
        Играть
      </button>
      <button className="ml-auto flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors">
        <Profile playerName={"Толмачев"} rating={150} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
