import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolios from "../components/Portfolios/Portfolios";
import Skills from "../components/Skills/Skills";
import { Element } from "react-scroll";

function Home(props) {
  return (
    <>
      <Element name="hero" className="element">
        <Hero isDarkMode={props.isDarkMode} />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="portfolios" className="element">
        <Portfolios />
      </Element>
      <Footer />
    </>
  );
}

export default Home;
