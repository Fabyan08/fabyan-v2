import Nav from "../../../Components/Nav/Nav";
import About from "./About";
import Certificate from "./Certificate";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Certificate />
      <Footer />
    </>
  );
};

export default Home;
