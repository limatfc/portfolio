import classes from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ projectData, onProjectCardClick }) {
  const { id, title, comingSoon, cardImageComingSoonURL, cardImageURL } =
    projectData;

  function onClickHandler() {
    if (comingSoon === true) return;
    onProjectCardClick(id);
  }

  const projetStatus = comingSoon === true;
  const modalPointerCSS = projetStatus ? classes.modalClose : classes.modalOpen;
  const displayedImage = projetStatus ? cardImageComingSoonURL : cardImageURL;

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
