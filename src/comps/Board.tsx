import { useEffect, useState } from "react";
import Row from "./Row";

interface BoardProps {
  answer: number[];
  onDefeat: () => void;
  onWin: () => void;
}

function Board({ answer, onDefeat, onWin }: BoardProps) {
  const [currentRow, setCurrentRow] = useState<number>(1);

  useEffect(() => {
    setCurrentRow(1);
  }, [answer]);

  const isWin = (states: string[]): boolean => {
    return states.every((value) => value === "perfect");
  };

  const handleOnConfirm = (states: string[]) => {
    if (isWin(states)) {
      onWin();
      return;
    }
    setCurrentRow((currentRow) => currentRow + 1);
  };

  const handleLastConfirm = (states: string[]) => {
    if (isWin(states)) {
      onWin();
      return;
    }
    onDefeat();
  };

  return (
    <div className="board">
      <Row
        answer={answer}
        isCurrent={currentRow === 1 ? true : false}
        key={1}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 2 ? true : false}
        key={2}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 3 ? true : false}
        key={3}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 4 ? true : false}
        key={4}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 5 ? true : false}
        key={5}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 6 ? true : false}
        key={6}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 7 ? true : false}
        key={7}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 8 ? true : false}
        key={8}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 9 ? true : false}
        key={9}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 10 ? true : false}
        key={10}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 11 ? true : false}
        key={11}
        onConfirm={handleOnConfirm}
      />
      <Row
        answer={answer}
        isCurrent={currentRow === 12 ? true : false}
        key={12}
        onConfirm={handleLastConfirm}
      />
    </div>
  );
}

export default Board;
