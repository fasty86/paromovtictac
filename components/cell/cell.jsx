import clsx from "clsx";

export function GameCell({ className, symbol }) {
  return (
    <div
      className={clsx(
        "w-[34px] h-[34px] border-[0.5px] border-slate-200 flex items-center justify-center ",
        className,
      )}
    >
      {symbol}
    </div>
  );
}
