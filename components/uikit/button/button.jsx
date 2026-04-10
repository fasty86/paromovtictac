import clsx from "clsx";

export function Button({ size = ",d", type = "primary", onclick, text }) {
  const buttonSize = {
    sm: "",
    md: "h-8 w-28 text-sm ",
    lg: "w-44 text-2xl",
  };
  const buttonType = {
    primary: "bg-teal-600 text-white hover:bg-teal-500",
    outlined:
      "bg-white border border-teal-600 text-teal-600 hover:bg-slate-100",
  };
  return (
    <button
      className={clsx(
        " transition-colors rounded-lg  leading-tight py-2 px-5",
        buttonSize[size],
        buttonType[type],
      )}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
