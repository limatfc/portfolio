import ModalButton from "../components/ModalButton";
import classes from "../styles/screens/ModalOverlay.module.css";

export default function ModalOverlay({ onToggleModal, clickedItem }) {
  const {
    title,
    description,
    modalImageURL,
    technologiesUsed,
    gitLink,
    hostingLink,
  } = clickedItem;

  const pillLabel = technologiesUsed.map((item) => (
    <span className={classes.pills} key={Math.random() * 100}>
      {item}
    </span>
  ));

  return (
    <>
      <div className={classes.backdrop} onClick={() => onToggleModal()}></div>
      <div className={classes.modalWrapper}>
        <button className={classes.closeButton} onClick={() => onToggleModal()}>
          x
        </button>
        <img
          className={classes.modalImage}
          src={modalImageURL}
          alt={`Screenshot of the ${title} website.`}
        />
        <h2 className={classes.title}>{title}</h2>
        <p>{description}</p>
        <div className={classes.pillsWrapper}>{pillLabel}</div>
        <ModalButton
          link={hostingLink}
          label={"Visit website / app"}
          style={classes.hostingButton}
        />
        <ModalButton
          link={gitLink}
          label={"Git repository"}
          style={classes.gitButton}
        />
      </div>
    </>
  );
}
