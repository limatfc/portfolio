import classes from "../styles/screens/About.module.css";
import mainImage from "../assets/images/about-main-image.png";

// good
export default function About() {
  return (
    <section id="about" className={classes.aboutWrapper}>
      <h2 className={classes.title}>About me</h2>
      <p className={classes.paragraph}>
        Hey! My name is Thaisa, and I am a junior frontend developer. I am from
        Lavras, a really small city in the Brazilian countryside. However, I got
        tired from all the hot weather we have over there, and decided to move
        to Sweden!
      </p>
      <p className={classes.paragraph}>
        I created this website to showcase all the work I have done so far!
        Please, take a look around my page and have a good time! I hope to hear
        from you soon.
      </p>
      <img
        className={classes.image}
        src={mainImage}
        alt="a girl excited about her computer, while hearts are comming out of it."
      />
    </section>
  );
}
