import clsx from "clsx";

export function UiModal({ width = "md" }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10">
      <div
        className={clsx(
          "min-h-[320px] mx-auto bg-white rounded-lg",
          {
            md: "max-w-[640px] w-full",
            full: "w-full mx-5",
          }[width],
        )}
      ></div>
    </div>
  );
}
