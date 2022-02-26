import ReactDOM from "react-dom";

import ModalOverlay from "../screens/ModalOverlay";

export default function Modal({ onToggleModal }) {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay onToggleModal={onToggleModal} />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}
