import classes from "../styles/screens/ModalOverlay.module.css";

export default function ModalOverlay({ onToggleModal, clickedItem }) {
  return (
    <div role="dialog">
      <div className={classes.backdrop} onClick={() => onToggleModal()}></div>
      <section className={classes.modalWrapper}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui totam
          nobis quisquam expedita ex unde! Asperiores nostrum fugiat eaque sunt
          officia pariatur non adipisci temporibus, quis assumenda numquam,
          nulla ipsum?
        </p>
      </section>
    </div>
  );
}
