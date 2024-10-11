import Row from "./Row";

interface BoardProps {
  nbOfRows: number;
}

function Board({ nbOfRows }: BoardProps) {
  const rows = [...Array(nbOfRows)].map((element, index) => {
    return <Row key={index + 1} />;
  });

  return <div className="board">{rows}</div>;
}

export default Board;
