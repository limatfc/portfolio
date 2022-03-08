import About from "./screens/About";
import Contact from "./screens/Contact";
import Hero from "./screens/Hero";
import Projects from "./screens/Projects";
import Tech from "./screens/Tech";

// Good component organization
// Use export default here (no points taken in this project, but i will on the next one)

// The correct name for the folder is not screen/ (screen takes the whole... screen), call them sections/
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
