import clsx from "clsx";

function addLeadingZero(value, count = 2, symbol = "0") {
  return String(value).padStart(count, symbol);
}
export function Timer({ data, className = "" }) {
  const min = addLeadingZero(parseInt(data / 60));
  const sec = addLeadingZero(data % 60);
  return (
    <div
      className={clsx(
        className,
        " text-xl self-end",
        Number(data) < 30 ? "text-red-600" : "text-slate-900",
      )}
    >
      {min}:{sec}
    </div>
  );
}

// className = "text-slate-900 text-xl self-end";
