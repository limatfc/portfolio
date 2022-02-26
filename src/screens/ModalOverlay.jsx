import classes from "../styles/screens/ModalOverlay.module.css";

export default function ModalOverlay({ onToggleModal, clickedItem }) {
  const {
    title,
    description,
    modalImageURL,
    technologiesUsed,
    gitLink,
    repositoryLink,
  } = clickedItem;

  const pillLabel = technologiesUsed.map((item) => (
    <span key={Math.random() * 100}>{item}</span>
  ));

  return (
    <div>
      <div
        className={classes.backdrop}
        role="dialog"
        onClick={() => onToggleModal()}
      ></div>
      <section className={classes.modalWrapper}>
        <img src={modalImageURL} alt={`Screenshot of the ${title} website.`} />
        <h2>{title}</h2>
        <p>{description}</p>
        {pillLabel}
        <a rel="noreferrer" href={gitLink} target="_blank">
          Visit website / app
        </a>
        <a rel="noreferrer" href={repositoryLink} target="_blank">
          Git repository
        </a>
      </section>
    </div>
  );
}
