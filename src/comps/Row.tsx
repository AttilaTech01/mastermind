import Bubble, { Option } from "./Bubble";
import Buttons from "./Buttons";
import Details from "./Details";

export const options: Option[] = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "green" },
  { id: 5, color: "pink" },
  { id: 6, color: "purple" },
];

function Row() {
  const handleSelect = (option: Option) => {
    console.log(
      `Option with id ${option.id} and color ${option.color} has been selected.`
    );
  };

  return (
    <div className="row">
      <Buttons />
      <div className="bubbles">
        <Bubble options={options} onChange={handleSelect} />
        <Bubble options={options} onChange={handleSelect} />
        <Bubble options={options} onChange={handleSelect} />
        <Bubble options={options} onChange={handleSelect} />
      </div>
      <Details />
    </div>
  );
}

export default Row;
