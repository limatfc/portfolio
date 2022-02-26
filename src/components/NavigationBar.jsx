import { Link } from "react-scroll";
import navigationBarLogo from "../assets/images/navigation-bar-logo.png";
import classes from "../styles/components/Navigation.module.css";

export default function NavigationBar() {
  return (
    <nav className={classes.navigationBarWrapper}>
      <Link to="about" smooth={true} className={classes.linkLike}>
        About
      </Link>
      <Link to="projects" smooth={true} className={classes.linkLike}>
        Projects
      </Link>
      <Link to="hero" smooth={true}>
        <img
          className={classes.logo}
          src={navigationBarLogo}
          alt="a logo containing an address book in the middle and Thaisa Lima written under it. It is wrapped in a blue frame."
        />
      </Link>
      <Link to="tech" smooth={true} className={classes.linkLike}>
        Tech
      </Link>
      <Link to="contact" smooth={true} className={classes.linkLike}>
        Contact
      </Link>
    </nav>
  );
}
