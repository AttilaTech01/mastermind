import { useEffect, useState } from "react";
import { Option, AllOptions } from "../commons/Option";
import Bubble from "./Bubble";
import Buttons from "./Buttons";
import Details from "./Details";

interface RowProps {
  answer: Option[];
  isCurrent: boolean;
  onConfirm: () => void;
}

/* TODO : managing options individually could be better */
function Row({ answer, isCurrent, onConfirm }: RowProps) {
  const [isLocked, setIsLocked] = useState<boolean>(isCurrent ? false : true);
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

  useEffect(() => {
    setIsLocked(isCurrent ? false : true);
  }, [isCurrent]);

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
    setFirstOption(undefined);
    setSecondOption(undefined);
    setThirdOption(undefined);
    setFourthOption(undefined);
  };

  const handleConfirm = () => {
    setIsLocked(true);
    onConfirm();
    /*
    const confirmedOptions = [
      firstOption,
      secondOption,
      thirdOption,
      fourthOption,
    ];

    let states = [];

    for (let i = 0; i < confirmedOptions.length; i++) {
      console.log(
        `Comparing answer : ${JSON.stringify(
          answer[i]
        )} with choice : ${JSON.stringify(confirmedOptions[i])}`
      );
      if (answer[i] === confirmedOptions[i]) {
        states.push("perfect");
      }
      if (answer[i] === confirmedOptions[i]) {
        states.push("perfect");
      }
    }
    */
  };

  return (
    <div className={`row ${isLocked ? "locked" : ""}`}>
      <Buttons
        disabled={isLocked}
        onClear={handleClear}
        onConfirm={handleConfirm}
      />
      <div className="bubbles">
        <Bubble
          locked={isLocked}
          options={AllOptions}
          value={firstOption}
          onChange={handleSelectFirst}
        />
        <Bubble
          locked={isLocked}
          options={AllOptions}
          value={secondOption}
          onChange={handleSelectSecond}
        />
        <Bubble
          locked={isLocked}
          options={AllOptions}
          value={thirdOption}
          onChange={handleSelectThird}
        />
        <Bubble
          locked={isLocked}
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
