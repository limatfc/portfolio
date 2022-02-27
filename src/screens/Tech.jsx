import classes from "../styles/screens/Tech.module.css";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { BsTerminalFill, BsGithub } from "react-icons/bs";

export default function Tech() {
  return (
    <section id="tech" className={classes.techWrapper}>
      <h2>Tech</h2>
      <p>
        Here are the technologies that I already know, and also the ones I am
        learning:
      </p>
      <div className={classes.allIconsWrapper}>
        <span className={classes.iconWrapper}>
          <FaReact className={classes.iconComponent} />
          <h3 className={classes.h3}>React</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiFirebase className={classes.iconComponent} />
          <h3 className={classes.h3}>Firebase DataBase</h3>
        </span>
        <span className={classes.iconWrapper}>
          <BsGithub className={classes.iconComponent} />
          <h3 className={classes.h3}>Github</h3>
        </span>
        <span className={classes.iconWrapper}>
          <BsTerminalFill className={classes.iconComponent} />
          <h3 className={classes.h3}>Command Line</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiTypescript className={classes.iconComponent} />
          <h3 className={classes.h3}>TypeScript</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiRedux className={classes.iconComponent} />
          <h3 className={classes.h3}>React Redux</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiFirebase className={classes.iconComponent} />
          <h3 className={classes.h3}>Firebase Auth</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiHtml5 className={classes.iconComponent} />
          <h3 className={classes.h3}>HTML</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiCss3 className={classes.iconComponent} />
          <h3 className={classes.h3}>CSS</h3>
        </span>
        <span className={classes.iconWrapper}>
          <SiJavascript className={classes.iconComponent} />
          <h3 className={classes.h3}>JavaScript</h3>
        </span>
      </div>
    </section>
  );
}
