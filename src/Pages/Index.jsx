import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
const Index = () => {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Hero />
      </div>
      <About />
      <Portfolio />
      <div className="mt-96"></div>
    </>
  );
};

export default Index;
