import clsx from "clsx";

function addLeadingZero(value, count = 2, symbol = "0") {
  return String(value).padStart(count, symbol);
}
export function Timer({ data, className = "", isActive }) {
  const min = addLeadingZero(parseInt(data / 60));
  const sec = addLeadingZero(data % 60);

  function getColor() {
    if (isActive) return Number(data) < 30 ? "text-red-600" : "text-slate-900";
    else return "text-slate-300";
  }
  return (
    <div
      className={clsx(
        className,
        "w-[60px] text-xl self-end transition-colors",
        getColor(),
      )}
    >
      {min}:{sec}
    </div>
  );
}
