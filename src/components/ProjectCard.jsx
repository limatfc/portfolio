import classes from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ projectData, onClick }) {
  const { id, title, comingSoon, cardImageURL } = projectData;

  function onClickHandler() {
    if (comingSoon === true) return;
    onClick(id);
  }

  return (
    <div onClick={onClickHandler} className={classes.cardWrapper}>
      <img
        className={`${classes.cardImage} ${comingSoon && classes.opacicity}`}
        src={cardImageURL}
        alt="ilustration related to the project title."
      />
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
}
