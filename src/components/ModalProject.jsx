import ModalButton from "./ModalButton";
import classes from "../styles/components/ModalProject.module.css";

export default function ModalProject({ onToggleModal, clickedItem }) {
  const {
    title,
    description,
    modalImageURL,
    technologiesUsed,
    gitLink,
    hostingLink,
  } = clickedItem;

  const pillsContent = technologiesUsed.map((item) => (
    <span className={classes.pills} key={item}>
      {item}
    </span>
  ));

  return (
    <section>
      <div className={classes.backdrop} onClick={() => onToggleModal()}></div>
      <div
        className={classes.modalWrapper}
        role="dialog"
        aria-labelledby="modalProjectsTitle"
        aria-describedby="modalProjectsDescription"
      >
        <button className={classes.closeButton} onClick={() => onToggleModal()}>
          x
        </button>
        <img
          className={classes.modalImage}
          src={modalImageURL}
          alt={`Screenshot of the ${title} website.`}
        />
        <h2 id="modalProjectsTitle" className={classes.title}>
          {title}
        </h2>
        <p className={classes.paragraph}>{description}</p>
        <p id={classes.modalProjectsDescription}>
          In this modal, you will see a screenshot of the website, the title,
          the description, the technologies used inside the projects, and links
          for the Github and the website hosting.
        </p>
        <div className={classes.pillsWrapper}>{pillsContent}</div>
        <ModalButton link={hostingLink} classStyle="primary">
          Visit website / app
        </ModalButton>
        <ModalButton link={gitLink} classStyle="secundary">
          Git repository
        </ModalButton>
      </div>
    </section>
  );
}
