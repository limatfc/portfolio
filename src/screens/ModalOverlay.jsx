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

  const pillsContent = technologiesUsed.map((item) => (
    <span className={classes.pills} key={item}>
      {item}
    </span>
  ));
  if (window.innerWidth > 1000)
    return (
      <section>
        <div className={classes.backdrop} onClick={() => onToggleModal()}></div>
        <div
          className={classes.modalWrapper}
          role="dialog"
          aria-labelledby="modalProjectsTitle"
          aria-describedby="modalProjectsDescription"
        >
          <button
            className={classes.closeButton}
            onClick={() => onToggleModal()}
          >
            x
          </button>
          <div className={classes.modalImageWrapper}>
            <img
              className={classes.modalImage}
              src={modalImageURL}
              alt={`Screenshot of the ${title} website.`}
            />
          </div>
          <h2 id="modalProjectsTitle" className={classes.title}>
            {title}
          </h2>
          <p className={classes.paragraph}>{description}</p>
          <p id={classes.modalProjectsDescription}>
            In this modal, you will see a screenshot of the website, the title,
            the description, the technologies used inside the projects, and
            links for the Github and the website hosting.
          </p>
          <div className={classes.pillsWrapper}>{pillsContent}</div>
          <ModalButton link={hostingLink} label={"Visit website / app"} />
          <ModalButton link={gitLink} label={"Git repository"} />
        </div>
      </section>
    );
}
