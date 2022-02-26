import projectsData from "../data/projects.json";
import classes from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({ onToggleModal }) {
  const cards = projectsData.map((item) => (
    <section
      onClick={onToggleModal}
      className={classes.cardWrapper}
      key={item.id}
    >
      {" "}
      {item["coming soon"] && (
        <span className={classes.ComingSoon}>Coming Soon</span>
      )}
      <img
        className={`${classes.cardImage} ${
          item["coming soon"] && classes.opacicity
        }`}
        src={item.imageURL}
        alt="ilustration related to the project title."
      />
      <h3 className={classes.subtitle}>{item.title}</h3>
    </section>
  ));

  return cards;
}
