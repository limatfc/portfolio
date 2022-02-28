import ModalButton from "../components/ModalButton";
import ModalPills from "../components/ModalPills";
import classes from "../styles/screens/ModalOverlay.module.css";

export default function ModalOverlay({ onToggleModal, clickedItem }) {
  const {
    title,
    description,
    modalImageURL,
    technologiesUsed,
    technologiesNotUsed,
    gitLink,
    hostingLink,
  } = clickedItem;
  console.log(technologiesUsed);
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
        <p className={classes.paragraph}>{description}</p>
        <div className={classes.pillsWrapper}>
          <ModalPills pillDataArray={technologiesUsed} />
          <ModalPills
            pillDataArray={technologiesNotUsed}
            style={classes.notUsedPills}
          />
        </div>
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
