import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});
export default function App({ Component, componentProps }) {
  return (
    <div className={inter.className}>
      <Component {...componentProps} />
      <div id="modal"></div>
    </div>
  );
}
