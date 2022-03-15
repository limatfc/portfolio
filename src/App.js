import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Tech from "./sections/Tech";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}
