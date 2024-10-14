import { useState } from "react";
import { Option, AllOptions } from "../commons/Option";
import Bubble from "./Bubble";
import Buttons from "./Buttons";
import Details from "./Details";

interface RowProps {
  answer: Option[];
}

/* TODO : managing options individually could be better */
function Row({ answer }: RowProps) {
  const [firstOption, setFirstOption] = useState<Option | undefined>(undefined);
  const [secondOption, setSecondOption] = useState<Option | undefined>(
    undefined
  );
  const [thirdOption, setThirdOption] = useState<Option | undefined>(undefined);
  const [fourthOption, setFourthOption] = useState<Option | undefined>(
    undefined
  );
  const [detailStates, setDetailStates] = useState<string[]>([
    "null",
    "null",
    "null",
    "null",
  ]);

  const handleSelectFirst = (option: Option) => {
    setFirstOption(option);
  };

  const handleSelectSecond = (option: Option) => {
    setSecondOption(option);
  };

  const handleSelectThird = (option: Option) => {
    setThirdOption(option);
  };

  const handleSelectFourth = (option: Option) => {
    setFourthOption(option);
  };

  const handleClear = () => {
    console.log("Clearing the line");
    setFirstOption(undefined);
    setSecondOption(undefined);
    setThirdOption(undefined);
    setFourthOption(undefined);
  };

  const handleConfirm = () => {
    console.log("Confirming my choices");
    const confirmedOptions = [
      firstOption,
      secondOption,
      thirdOption,
      fourthOption,
    ];
    for (let i = 0; i < confirmedOptions.length; i++) {
      console.log(
        `Comparing answer : ${JSON.stringify(
          answer[i]
        )} with choice : ${JSON.stringify(confirmedOptions[i])}`
      );
    }
  };

  return (
    <div className="row">
      <Buttons onClear={handleClear} onConfirm={handleConfirm} />
      <div className="bubbles">
        <Bubble
          options={AllOptions}
          value={firstOption}
          onChange={handleSelectFirst}
        />
        <Bubble
          options={AllOptions}
          value={secondOption}
          onChange={handleSelectSecond}
        />
        <Bubble
          options={AllOptions}
          value={thirdOption}
          onChange={handleSelectThird}
        />
        <Bubble
          options={AllOptions}
          value={fourthOption}
          onChange={handleSelectFourth}
        />
      </div>
      <Details states={detailStates} />
    </div>
  );
}

export default Row;
