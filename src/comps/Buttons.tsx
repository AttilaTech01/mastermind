interface ButtonProps {
  onClear: () => void;
  onConfirm: () => void;
}

function Buttons({ onClear, onConfirm }: ButtonProps) {
  return (
    <div className="buttons">
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Buttons;
