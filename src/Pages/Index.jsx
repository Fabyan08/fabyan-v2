import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "./About";
const Index = () => {
  return (
    <>
      <Nav />
      <div className="pt-20">
        <Hero />
      </div>
      <About />
      <div className="mt-96">TES</div>
    </>
  );
};

export default Index;
