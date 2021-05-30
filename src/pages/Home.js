import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolios from "../components/Portfolios/Portfolios";
import Skills from "../components/Skills/Skills";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolios />
      <Footer />
    </>
  );
}

export default Home;
