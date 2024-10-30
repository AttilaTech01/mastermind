import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Tooltip from "@mui/material/Tooltip";

interface ButtonProps {
  disabled: boolean;
  onClear: () => void;
  onConfirm: () => void;
}

function Buttons({ disabled, onClear, onConfirm }: ButtonProps) {
  return (
    <div className="buttons">
      <Tooltip title="Confirm">
        <button disabled={disabled} onClick={onConfirm}>
          <CheckCircleIcon />
        </button>
      </Tooltip>
      <Tooltip title="Clear">
        <button disabled={disabled} onClick={onClear}>
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  );
}

export default Buttons;
