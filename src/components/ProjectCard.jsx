import classes from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ projectData, onClick }) {
  const { id, title, comingSoon, imageURL } = projectData;

  function onClickHandler() {
    if (comingSoon === true) return;
    onClick(id);
  }

  return (
    <div onClick={onClickHandler} className={classes.cardWrapper}>
      {comingSoon && <span className={classes.ComingSoon}>Coming Soon</span>}
      <img
        className={`${classes.cardImage} ${comingSoon && classes.opacicity}`}
        src={imageURL}
        alt="ilustration related to the project title."
      />
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
}
