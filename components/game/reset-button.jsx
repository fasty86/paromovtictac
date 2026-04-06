import React from "react";

export default function ResetButton({ handler }) {
  return (
    <button
      className="cursor-pointer mt-3 bg-transparent border border-gray-600 py-1 px-3 rounded"
      onClick={handler}
    >
      Сбросить
    </button>
  );
}
