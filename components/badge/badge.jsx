import clsx from "clsx";

export function Badge({ className, children }) {
  return (
    <div
      className={clsx(
        className,
        " w-6 h-6 bg-white absolute -top-2  -left-2 rounded-full shadow-md flex items-center justify-center",
      )}
    >
      {children}
    </div>
  );
}
