import Image from "next/image";
import logo from "./logo.svg";
import { ArrowDownIcon } from "./icons";
import { Profile } from "../profile";
import { Button } from "../uikit/button";
export function Header() {
  return (
    <header className="h-24 bg-white px-8 flex items-center shadow-lg">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <Button size="lg" text="Играть" onclick={() => console.log("play")} />
      <button className="ml-auto flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors">
        <Profile playerName={"Толмачев"} rating={150} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
