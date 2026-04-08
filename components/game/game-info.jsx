import clsx from "clsx";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white w-[616px] h-20 rounded-2xl px-2 py-4",
      )}
    >
      GameInfo
    </div>
  );
}
