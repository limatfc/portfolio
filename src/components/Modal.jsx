import ReactDOM from "react-dom"; // no need to import React since v17

import ModalOverlay from "../screens/ModalOverlay";

// good
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
