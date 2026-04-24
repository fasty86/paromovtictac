export function GameTitle({ title = "крестики нолики" }) {
  return (
    <h1 className="text-black text-4xl first-letter:capitalize">{title}</h1>
  );
}
