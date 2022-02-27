import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import classes from "../styles/data/ContactIcons.module.css";

export default function socialMediaDataFunction() {
  const socialMediaData = [
    {
      component: <BsGithub className={classes.socialMediaIcons} />,
      link: "https://github.com/limatfc",
    },
    {
      component: <BsLinkedin className={classes.socialMediaIcons} />,
      link: "https://www.linkedin.com/in/tha%C3%ADsa-freitas-carvalho-de-lima-8a819187/",
    },
    {
      component: (
        <AiFillInstagram
          className={`${classes.socialMediaIcons} ${classes.instagram}`}
        />
      ),
      link: "https://www.instagram.com/lima_fcthaisa/",
    },
  ];
  return socialMediaData;
}
