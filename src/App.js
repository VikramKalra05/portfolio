import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import GitHub from "./Components/GitHub";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHub />
        <Contact />
      </main>
    </div>
  );
}

export default App;
