interface ButtonProps {
  disabled: boolean;
  onClear: () => void;
  onConfirm: () => void;
}

function Buttons({ disabled, onClear, onConfirm }: ButtonProps) {
  return (
    <div className="buttons">
      <button disabled={disabled} onClick={onConfirm}>
        Confirm
      </button>
      <button disabled={disabled} onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default Buttons;
