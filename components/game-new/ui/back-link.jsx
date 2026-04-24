import Link from "next/link";
import { Arrow } from "./icons";

export function BackLink({}) {
  return (
    <Link href="#" className="flex gap-2 text-teal-600 text-xs leading-tight">
      <Arrow />
      <div>На главную</div>
    </Link>
  );
}
