import { Option } from "../commons/Option";
import Row from "./Row";

const answer: Option[] = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "green" },
];

interface BoardProps {
  nbOfRows: number;
}

function Board({ nbOfRows }: BoardProps) {
  const rows = [...Array(nbOfRows)].map((element, index) => {
    return <Row answer={answer} key={index + 1} />;
  });

  return <div className="board">{rows}</div>;
}

export default Board;
