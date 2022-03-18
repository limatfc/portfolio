import classes from "../styles/sections/Tech.module.css";
import techData from "../data/tech.json";

export default function Tech() {
  const technologySymbol = techData.map((item) => (
    <span key={item.heading} className={classes.iconWrapper}>
      <img
        className={classes.icon}
        src={require(`../assets/icons/tech/${item.iconURL}`)}
        alt={`the icon corresponding to ${item.heading}`}
      />
      <h3 className={classes.h3}>{item.heading}</h3>
    </span>
  ));

  return (
    <section id="tech" className={classes.techWrapper}>
      <h2>Tech</h2>
      <p className={classes.paragraph}>
        Here are the technologies that I already know, and also the ones I am
        learning:
      </p>
      <div className={classes.allIconsWrapper}>{technologySymbol}</div>
    </section>
  );
}
