import Buttons from "./Buttons";
import Details from "./Details";

function Row() {
  return (
    <div className="row">
      <Buttons />
      <div className="bubbles">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
      <Details />
    </div>
  );
}

export default Row;
