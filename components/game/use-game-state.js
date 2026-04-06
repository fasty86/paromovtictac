import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  const lines = [
    // Горизонтали
    [0, 1, 2], // верхний ряд
    [3, 4, 5], // средний ряд
    [6, 7, 8], // нижний ряд

    // Вертикали
    [0, 3, 6], // левая колонка
    [1, 4, 7], // центральная колонка
    [2, 5, 8], // правая колонка

    // Диагонали
    [0, 4, 8], // главная диагональ
    [2, 4, 6], // побочная диагональ
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const [cells, setCells] = useState(() =>
    Array.from({ length: 9 }, () => null),
  );
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
  const getWinnerCell = (index) => winnerSequence?.includes(index);

  const toggleCell = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const resetGame = () => {
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  return {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    toggleCell,
    resetGame,
    getWinnerCell,
  };
}
