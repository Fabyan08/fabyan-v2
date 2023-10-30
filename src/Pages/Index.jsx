import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
import { AiOutlineArrowUp } from "react-icons/ai";
const Index = () => {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Hero id="home" />
      </div>
      <About />
      <Portfolio />
      <Experiences />
      <Certificate />
      <div className=" z-[999999] bg-primary/40 backdrop-blur-lg shadow-md text-white w-10 h-10 rounded-full right-12 bottom-12 fixed flex items-center justify-center text-2xl">
        <a href="#">
          {" "}
          <AiOutlineArrowUp />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Index;
