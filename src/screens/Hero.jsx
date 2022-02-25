import NavigationBar from "../components/NavigationBar";
import heroMainImage from "../assets/images/hero-main-image.png";
import heroHoverImage from "../assets/images/hero-hover-image.png";
import classes from "../styles/screens/Hero.module.css";

export default function Hero() {
  return (
    <section className={classes.heroWrapper}>
      <NavigationBar />
      <img
        className={classes.hoverImage}
        src={heroHoverImage}
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
