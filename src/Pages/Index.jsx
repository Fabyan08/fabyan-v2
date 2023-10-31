import BackToTopButton from "../Components/top";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
// import
const Index = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Nav />
        <div className="pt-20">
          <Hero id="home" />
        </div>
        <About />
        <Portfolio />
        <Experiences />
        <Certificate />
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Index;
