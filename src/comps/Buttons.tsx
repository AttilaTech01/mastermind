import { Delete02Icon, CheckmarkSquare01Icon } from "hugeicons-react";

interface ButtonProps {
  disabled: boolean;
  onClear: () => void;
  onConfirm: () => void;
}

function Buttons({ disabled, onClear, onConfirm }: ButtonProps) {
  return (
    <div className="buttons">
      <button disabled={disabled} onClick={onConfirm}>
        <CheckmarkSquare01Icon />
      </button>
      <button disabled={disabled} onClick={onClear}>
        <Delete02Icon />
      </button>
    </div>
  );
}

export default Buttons;
