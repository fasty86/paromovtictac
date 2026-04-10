import clsx from "clsx";

export function Button({ className, onclick, text }) {
  return (
    <button
      className={clsx(
        " transition-colors rounded-lg text-2xl leading-tight py-2 px-5",
        className,
      )}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
