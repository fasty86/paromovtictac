import clsx from "clsx";
export function Divider({ clssName }) {
  return <div className={clsx(clssName, "w-px h-8 bg-slate-200 mx-6")}></div>;
}
