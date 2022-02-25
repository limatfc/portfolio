import navigationBarLogo from "../assets/images/navigation-bar-logo.png";
import classes from "../styles/components/Navigation.module.css";

export default function NavigationBar() {
  return (
    <div className={classes.navigationBarWrapper}>
      <button className={classes.linkLike}>About</button>
      <button className={classes.linkLike}>Projects</button>
      <img
        className={classes.logo}
        src={navigationBarLogo}
        alt="a logo containing an address book in the middle and Thaisa Lima written under it. It is wrapped in a blue frame."
      />
      <button className={classes.linkLike}>Tech</button>
      <button className={classes.linkLike}>Contact</button>
    </div>
  );
}
