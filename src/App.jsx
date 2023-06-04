import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import About from "./Sections/About";
import Projects from "./Sections/Projects/Projects";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./Sections/Footer";
import "./index.css";

function App() {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          å<title>Nadia Minster — Portfolio</title>
          <link rel="icon" type="icon/ico" href="dist/assets/icon.ico" />
        </Helmet>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </HelmetProvider>
    </main>
  );
}

export default App;
