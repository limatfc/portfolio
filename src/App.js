import "./App.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Hero from "./screens/Hero";
import Projects from "./screens/Projects";
import Tech from "./screens/Tech";

function App() {
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

export default App;
