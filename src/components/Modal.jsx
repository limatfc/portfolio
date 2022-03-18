import ReactDOM from "react-dom";
import ModalProject from "../components/ModalProject";

export default function Modal({ showModal, onToggleModal, clickedItem }) {
  if (!showModal) return null;

  return (
    <div>
      {ReactDOM.createPortal(
        <ModalProject
          clickedItem={clickedItem}
          onToggleModal={onToggleModal}
        />,
        document.getElementById("modal-root")
      )}
    </div>
  );
}
