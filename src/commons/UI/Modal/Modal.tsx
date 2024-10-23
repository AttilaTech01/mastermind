import { ReactNode } from "react";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  title: string;
  onConfirm: () => void;
  onClose: () => void;
}

function Modal({ children, isOpen, title, onClose, onConfirm }: ModalProps) {
  return (
    <div className={`${"modal"} ${isOpen ? "display-block" : "display-none"}`}>
      <div className="modal-main">
        <div className="modal-head">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
        <div className="btn-container">
          <button className="green" type="button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="red" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
