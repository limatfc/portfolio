import classes from "../styles/screens/Tech.module.css";
import { techData } from "../data/tech";

export default function Tech() {
  const technologies = techData.map((item) => {
    return (
      <span key={item.heading} className={classes.iconWrapper}>
        {item.component}
        <h3 className={classes.h3}>{item.heading}</h3>
      </span>
    );
  });

  return (
    <section id="tech" className={classes.techWrapper}>
      <h2>Tech</h2>
      <p className={classes.paragraph}>
        Here are the technologies that I already know, and also the ones I am
        learning:
      </p>
      <div className={classes.allIconsWrapper}>{technologies}</div>
    </section>
  );
}
