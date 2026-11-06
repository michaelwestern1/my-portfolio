
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import Background from "./components/Background";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080d17] text-white">
      <Background />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}
