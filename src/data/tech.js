import classes from "../styles/screens/Tech.module.css";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { BsTerminalFill, BsGithub } from "react-icons/bs";

export const techData = [
  {
    component: <FaReact className={classes.iconComponent} />,
    heading: "React",
  },
  {
    component: <SiFirebase className={classes.iconComponent} />,
    heading: "Firebase DataBase",
  },
  {
    component: <BsGithub className={classes.iconComponent} />,
    heading: "Github",
  },
  {
    component: <BsTerminalFill className={classes.iconComponent} />,
    heading: "Command Line",
  },
  {
    component: <SiTypescript className={classes.iconComponent} />,
    heading: "TypeScript",
  },
  {
    component: <SiRedux className={classes.iconComponent} />,
    heading: "React Redux",
  },
  {
    component: <SiFirebase className={classes.iconComponent} />,
    heading: "Firebase Auth",
  },
  {
    component: <SiHtml5 className={classes.iconComponent} />,
    heading: "HTML",
  },
  { component: <SiCss3 className={classes.iconComponent} />, heading: "CSS" },
  {
    component: <SiJavascript className={classes.iconComponent} />,
    heading: "JavaScript",
  },
];
