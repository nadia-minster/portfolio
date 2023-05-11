import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import About from "./Sections/About";
import Projects from "./Sections/Projects/Projects";
import Footer from "./Sections/Footer";
import "./index.css";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
