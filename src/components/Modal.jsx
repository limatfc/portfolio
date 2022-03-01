import ReactDOM from "react-dom";

import ModalOverlay from "../screens/ModalOverlay";

export default function Modal({ showModal, onToggleModal, clickedItem }) {
  if (!showModal) return null;

  return (
    <div>
      {ReactDOM.createPortal(
        <ModalOverlay
          clickedItem={clickedItem}
          onToggleModal={onToggleModal}
        />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}
