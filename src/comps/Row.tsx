import { useEffect, useState } from "react";
import { Option, AllOptions } from "../commons/Option";
import Bubble from "./Bubble";
import Buttons from "./Buttons";
import Details from "./Details";

interface RowProps {
  answer: number[];
  isCurrent: boolean;
  onConfirm: (states: string[]) => void;
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

  useEffect(() => {
    setDetailStates(["null", "null", "null", "null"]);
    handleClear();
  }, [answer]);

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

    const confirmedOptions = [
      firstOption,
      secondOption,
      thirdOption,
      fourthOption,
    ];

    const states: string[] = []; // null | valid | perfect

    for (let i = 0; i < confirmedOptions.length; i++) {
      const idToSearchFor: number | undefined =
        confirmedOptions[i]?.id || undefined;

      if (idToSearchFor === undefined) {
        states.push("null");
        continue;
      }
      if (idToSearchFor === answer[i]) {
        states.push("perfect");
        continue;
      }
      if (answer.includes(idToSearchFor)) {
        states.push("valid");
        continue;
      }
      states.push("null");
    }

    setDetailStates(states);
    onConfirm(states);
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
