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
          <title>Nadia Minster — Portfolio</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../public/favicon_io/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../public/favicon_io/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../public/favicon_io/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
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
