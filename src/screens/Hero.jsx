import NavigationBar from "../components/NavigationBar";
import heroMainImage from "../assets/hero-main-image.png";
import heroHoverImage from "../assets/hero-hover-image.png";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <NavigationBar />
      <img
        src={heroHoverImage}
        alt="welcome written inside a black frame. The frame is hanging from a nail."
      />
      <img
        src={heroMainImage}
        alt="a girl with a ponytail using a green computer and making anotations on a green notebook."
      />
      <h1>
        Hello, my name is Thaísa, and I am a frontend developer from Brazil.
      </h1>
    </section>
  );
}
