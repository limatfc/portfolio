import ReactDOM from "react-dom";

import ModalOverlay from "../screens/ModalOverlay";

export default function Modal({ onToggleModal, clickedItem }) {
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
