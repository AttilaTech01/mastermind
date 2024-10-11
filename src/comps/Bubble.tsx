import { useEffect, useRef, useState } from "react";

export interface Option {
  color: string;
  id: number;
}

interface BubbleProps {
  options: Option[];
  value?: Option;
  onChange: (option: Option) => void;
}

function Bubble({ options, value, onChange }: BubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler as EventListener, true);

    return () => {
      document.removeEventListener("click", handler as EventListener);
    };
  }, []);

  const handleToggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSelectOption = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options?.map((option) => (
    <div key={option.id} onClick={() => handleSelectOption(option)}>
      {option.color}
    </div>
  ));

  const content = value?.color || "";

  return (
    <div ref={divEl} className="bubble">
      <div className="selector" onClick={handleToggleOpen}>
        {content}
      </div>
      {isOpen && <div className="options">{renderedOptions}</div>}
    </div>
  );
}

export default Bubble;
