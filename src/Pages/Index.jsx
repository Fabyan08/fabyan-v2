import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
const Index = () => {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Hero />
      </div>
      <About />
      <Portfolio />
      <Experiences />
      <Certificate />
      <Footer />
    </>
  );
};

export default Index;
