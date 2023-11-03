import BackToTopButton from "../Components/top";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lakukan logika async untuk persiapan aplikasi Anda di sini
    // Setelah semua persiapan selesai, atur isLoading menjadi false
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
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
      )}
    </>
  );
};

export default Index;
