import NavigationBar from "../components/NavigationBar";
import heroMainImage from "../assets/images/hero-main-image.png";
import heroWelcomeImage from "../assets/images/hero-welcome-image.png";
import classes from "../styles/screens/Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={classes.heroWrapper}>
      <NavigationBar />
      <img
        className={classes.welcomeImage}
        src={heroWelcomeImage}
        alt="welcome written inside a black frame. The frame is hanging from a nail."
      />
      <img
        className={classes.mainImage}
        src={heroMainImage}
        alt="a girl with a ponytail using a green computer and making anotations on a green notebook."
      />
      <h1 className={classes.text}>
        Hello, my name is Thaísa, and I am a frontend developer from Brazil.
      </h1>
    </section>
  );
}
