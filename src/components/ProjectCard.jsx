import classes from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ projectData, onProjectCardClick }) {
  const { id, title, comingSoon, cardImageComingSoonURL, cardImageURL } =
    projectData;

  function onClickHandler() {
    if (comingSoon === true) return;
    onProjectCardClick(id);
  }

  let displayedImage = "";
  let modalPointerCSS = "";
  if (comingSoon === true) {
    displayedImage = cardImageComingSoonURL;
    modalPointerCSS = classes.modalClose;
  } else {
    displayedImage = cardImageURL;
    modalPointerCSS = classes.modalOpen;
  }

  return (
    <div
      onClick={onClickHandler}
      className={`${classes.cardWrapper} ${modalPointerCSS}`}
    >
      <img
        className={`${classes.cardImage} ${comingSoon && classes.opacicity}`}
        src={displayedImage}
        alt="ilustration related to the project title."
      />
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
}
