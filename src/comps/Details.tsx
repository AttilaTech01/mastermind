interface DetailsProps {
  states: string[]; // null | valid | perfect
}

function Details({ states }: DetailsProps) {
  return (
    <div className="details">
      <div className="details-row">
        <div className={`details-item ${states[0]}`}></div>
        <div className={`details-item ${states[1]}`}></div>
      </div>
      <div className="details-row">
        <div className={`details-item ${states[2]}`}></div>
        <div className={`details-item ${states[3]}`}></div>
      </div>
    </div>
  );
}

export default Details;
